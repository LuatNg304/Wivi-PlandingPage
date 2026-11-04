import React from "react";
import { useStore } from "react-redux";
import { Check, CheckCircle2, Copy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ApiError,
  checkoutSubscription,
  getMySubscription,
  getSubscriptionOrder,
  getSubscriptionPlans,
  type CheckoutOrder,
  type MySubscription,
  type SubscriptionPlan,
} from "@/services/authApi";
import { useAppDispatch, useAppSelector, type RootState } from "@/store";
import {
  checkoutPendingSet,
  selectAccessToken,
  sessionCleared,
} from "@/store/authSlice";

const CHECKOUT_HASH = "#mua-goi";
// Hệ thống chỉ bán một gói trả phí, nên mọi thẻ trả phí trên bảng giá đều mua gói này.
const PAID_PLAN_CODE = "PRO_MONTHLY";
const POLL_INTERVAL_MS = 5000;

type Step =
  | "loading"
  | "confirm"
  | "qr"
  | "success"
  | "failed"
  | "error"
  | "expired";

function formatMoney(value: string | number) {
  return `${Number(value).toLocaleString("vi-VN")}đ`;
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("vi-VN");
}

function errorMessage(error: unknown) {
  return error instanceof ApiError
    ? error.message
    : "Đã có lỗi xảy ra. Vui lòng thử lại.";
}

// navigator.clipboard không tồn tại trên trang HTTP nên cần cách dự phòng.
async function copyText(text: string, container: HTMLElement) {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.className = "fixed opacity-0";
  container.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy failed");
}

function TransferRow({
  label,
  value,
  copyValue,
}: {
  label: string;
  value: string;
  copyValue?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await copyText(copyValue ?? value, event.currentTarget.parentElement!);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium break-words text-foreground">{value}</p>
      </div>
      {copyValue !== undefined && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={copied ? `Đã sao chép ${label}` : `Sao chép ${label}`}
          onClick={handleCopy}
        >
          {copied ? <Check className="text-emerald-600" /> : <Copy />}
        </Button>
      )}
    </div>
  );
}

function CheckoutFlow({
  busy,
  setBusy,
  onClose,
  onRelogin,
}: {
  busy: boolean;
  setBusy: (busy: boolean) => void;
  onClose: () => void;
  onRelogin: () => void;
}) {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectAccessToken);
  const [step, setStep] = React.useState<Step>("loading");
  const [plan, setPlan] = React.useState<SubscriptionPlan | null>(null);
  const [subscription, setSubscription] =
    React.useState<MySubscription | null>(null);
  const [order, setOrder] = React.useState<CheckoutOrder | null>(null);
  const [error, setError] = React.useState("");
  const [attempt, setAttempt] = React.useState(0);
  // Giữ token ban đầu để màn hình hết phiên không tự tải lại khi store bị xoá.
  const tokenRef = React.useRef(token);

  const handleError = React.useCallback(
    (cause: unknown) => {
      if (cause instanceof ApiError && cause.status === 401) {
        dispatch(sessionCleared());
        setStep("expired");
      } else {
        setError(errorMessage(cause));
        setStep("error");
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    const accessToken = tokenRef.current;
    if (!accessToken) return;
    let cancelled = false;

    Promise.all([getSubscriptionPlans(), getMySubscription(accessToken)])
      .then(([plans, current]) => {
        if (cancelled) return;
        const paidPlan = plans.find((item) => item.code === PAID_PLAN_CODE);
        if (!paidPlan) {
          setError("Gói thành viên hiện chưa mở bán.");
          setStep("error");
          return;
        }
        setPlan(paidPlan);
        setSubscription(current);
        setStep("confirm");
      })
      .catch((cause) => {
        if (!cancelled) handleError(cause);
      });

    return () => {
      cancelled = true;
    };
  }, [attempt, handleError]);

  React.useEffect(() => {
    const accessToken = tokenRef.current;
    if (step !== "qr" || !order || !accessToken) return;
    let stopped = false;
    let timer: ReturnType<typeof setTimeout>;

    const poll = async () => {
      try {
        const { status } = await getSubscriptionOrder(
          accessToken,
          order.orderCode
        );
        if (stopped) return;
        if (status === "Paid") {
          const current = await getMySubscription(accessToken).catch(
            () => null
          );
          if (stopped) return;
          setSubscription(current);
          setStep("success");
          return;
        }
        if (status === "Failed" || status === "Cancelled") {
          setStep("failed");
          return;
        }
      } catch (cause) {
        if (stopped) return;
        if (cause instanceof ApiError && cause.status === 401) {
          handleError(cause);
          return;
        }
        // Lỗi mạng tạm thời: đơn vẫn còn, tiếp tục kiểm tra ở lần sau.
      }
      timer = setTimeout(poll, POLL_INTERVAL_MS);
    };

    timer = setTimeout(poll, POLL_INTERVAL_MS);
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, [step, order, handleError]);

  const handlePay = async () => {
    if (busy || !tokenRef.current) return;
    setBusy(true);
    try {
      const created = await checkoutSubscription(
        tokenRef.current,
        PAID_PLAN_CODE
      );
      setOrder(created);
      setStep("qr");
    } catch (cause) {
      handleError(cause);
    } finally {
      setBusy(false);
    }
  };

  if (step === "loading") {
    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg">Gói thành viên</DialogTitle>
          <DialogDescription>Đang tải thông tin gói…</DialogDescription>
        </DialogHeader>
        <Loader2
          className="mx-auto size-8 animate-spin text-primary"
          aria-hidden
        />
      </>
    );
  }

  if (step === "expired") {
    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg">Phiên đăng nhập đã hết hạn</DialogTitle>
          <DialogDescription>
            Vui lòng đăng nhập lại để tiếp tục.
          </DialogDescription>
        </DialogHeader>
        <Button className="h-10 w-full" onClick={onRelogin}>
          Đăng nhập lại
        </Button>
      </>
    );
  }

  if (step === "error") {
    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg">Không thể tiếp tục</DialogTitle>
          <DialogDescription role="alert">{error}</DialogDescription>
        </DialogHeader>
        <Button
          className="h-10 w-full"
          onClick={() => {
            setStep("loading");
            setAttempt((current) => current + 1);
          }}
        >
          Thử lại
        </Button>
      </>
    );
  }

  if (step === "failed") {
    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg">Đơn hàng không thành công</DialogTitle>
          <DialogDescription role="alert">
            Đơn hàng đã thất bại hoặc bị huỷ. Bạn có thể tạo đơn mới.
          </DialogDescription>
        </DialogHeader>
        <Button className="h-10 w-full" disabled={busy} onClick={handlePay}>
          {busy && <Loader2 className="animate-spin" aria-hidden />}
          Tạo đơn mới
        </Button>
      </>
    );
  }

  if (step === "success") {
    return (
      <>
        <DialogHeader className="items-center text-center">
          <CheckCircle2 className="size-12 text-emerald-600" aria-hidden />
          <DialogTitle className="text-lg">Thanh toán thành công</DialogTitle>
          <DialogDescription>
            Bạn đã nâng cấp lên {order?.planName}
            {subscription?.expiresAt
              ? `, có hiệu lực đến ${formatDate(subscription.expiresAt)}.`
              : "."}
          </DialogDescription>
        </DialogHeader>
        <Button className="h-10 w-full" onClick={onClose}>
          Đóng
        </Button>
      </>
    );
  }

  if (step === "qr" && order) {
    const { transferInfo } = order;
    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg">Quét mã để thanh toán</DialogTitle>
          <DialogDescription>
            {order.planName} · {formatMoney(order.amount)}. Giữ nguyên số tiền
            và nội dung chuyển khoản để gói được kích hoạt tự động.
          </DialogDescription>
        </DialogHeader>
        <img
          src={order.qrCodeUrl}
          alt={`Mã VietQR thanh toán đơn ${order.orderCode}`}
          className="mx-auto size-52 rounded-lg border border-border object-contain"
        />
        <div className="grid gap-2 rounded-lg border border-border p-3">
          <TransferRow label="Ngân hàng" value={transferInfo.bankName} />
          <TransferRow
            label="Số tài khoản"
            value={transferInfo.accountNumber}
            copyValue={transferInfo.accountNumber}
          />
          <TransferRow
            label="Chủ tài khoản"
            value={transferInfo.accountHolderName}
          />
          <TransferRow
            label="Số tiền"
            value={formatMoney(order.amount)}
            copyValue={String(Number(order.amount))}
          />
          <TransferRow
            label="Nội dung chuyển khoản"
            value={transferInfo.transferContent}
            copyValue={transferInfo.transferContent}
          />
        </div>
        <p
          role="status"
          className="flex items-center justify-center gap-2 text-xs font-medium text-foreground"
        >
          <Loader2 className="size-3.5 animate-spin" aria-hidden />
          Đang chờ thanh toán…
        </p>
        <p className="text-center text-xs text-muted-foreground">
          Nếu đã chuyển khoản mà đóng cửa sổ này, gói vẫn được kích hoạt. Bạn
          không cần chuyển lại.
        </p>
      </>
    );
  }

  const isPremium = Boolean(subscription?.isPremium);
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-lg">
          {isPremium ? "Gói của bạn" : plan?.name}
        </DialogTitle>
        <DialogDescription>
          {isPremium
            ? `Bạn đang dùng ${subscription?.plan?.name}${
                subscription?.expiresAt
                  ? ` đến ngày ${formatDate(subscription.expiresAt)}`
                  : ""
              }.`
            : `${formatMoney(plan?.price ?? 0)} / tháng, thanh toán bằng chuyển khoản VietQR.`}
        </DialogDescription>
      </DialogHeader>

      {isPremium ? (
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          Gia hạn {formatMoney(plan?.price ?? 0)}: thời hạn mới được tính 1 tháng
          từ ngày thanh toán và không cộng dồn số ngày còn lại.
        </p>
      ) : (
        <ul className="grid gap-2 text-sm text-foreground">
          {plan?.features?.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Button className="h-10 w-full" disabled={busy} onClick={handlePay}>
        {busy && <Loader2 className="animate-spin" aria-hidden />}
        {isPremium ? "Gia hạn" : "Thanh toán"}
      </Button>
    </>
  );
}

function clearHash() {
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
}

export function CheckoutDialog() {
  const store = useStore<RootState>();
  const [open, setOpen] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  const requestLogin = React.useCallback(() => {
    store.dispatch(checkoutPendingSet(true));
    window.location.hash = "#dang-nhap";
  }, [store]);

  React.useEffect(() => {
    const syncWithHash = () => {
      if (window.location.hash !== CHECKOUT_HASH) return;
      if (store.getState().auth.user) {
        setOpen(true);
      } else {
        requestLogin();
      }
    };
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, [store, requestLogin]);

  const close = () => {
    setOpen(false);
    clearHash();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next && !busy) close();
      }}
    >
      <DialogContent
        className="max-h-[90svh] gap-4 overflow-y-auto border border-border p-5 sm:max-w-md sm:p-6"
        onInteractOutside={(event) => event.preventDefault()}
      >
        {open && (
          <CheckoutFlow
            busy={busy}
            setBusy={setBusy}
            onClose={close}
            onRelogin={() => {
              setOpen(false);
              requestLogin();
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
