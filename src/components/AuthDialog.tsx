import React from "react";
import { useStore } from "react-redux";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowLeft, CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  ApiError,
  register,
  requestPasswordResetOtp,
  requestRegistrationOtp,
  resetPassword,
  verifyRegistrationOtp,
} from "@/services/authApi";
import { useAppDispatch, type RootState } from "@/store";
import { checkoutPendingSet, login, startSession } from "@/store/authSlice";

const MODE_BY_HASH: Record<string, Mode> = {
  "#dang-ky": "register",
  "#dang-nhap": "login",
};
const OTP_LENGTH = 6;
const RESEND_COOLDOWN_SECONDS = 60;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INVALID_EMAIL = "Vui lòng nhập email hợp lệ.";
const SHORT_PASSWORD = "Mật khẩu phải có ít nhất 6 ký tự.";
const PASSWORD_MISMATCH = "Mật khẩu xác nhận không khớp.";

type Mode = "login" | "register" | "reset";
type FormErrors = Record<string, string | undefined>;

interface FlowProps {
  busy: boolean;
  setBusy: (busy: boolean) => void;
  initialEmail: string;
  onSwitch: (mode: Mode, email: string, notice?: string) => void;
}

function toApiError(error: unknown) {
  return error instanceof ApiError
    ? error
    : new ApiError(0, "Đã có lỗi xảy ra. Vui lòng thử lại.");
}

function useResendCooldown() {
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  return [seconds, () => setSeconds(RESEND_COOLDOWN_SECONDS)] as const;
}

function useFocusFirstInvalid(
  formRef: React.RefObject<HTMLFormElement | null>,
  errors: FormErrors
) {
  React.useEffect(() => {
    formRef.current
      ?.querySelector<HTMLElement>('[aria-invalid="true"]')
      ?.focus();
  }, [formRef, errors]);
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  );
}

function GeneralError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive"
    >
      {message}
    </p>
  );
}

function TextField({
  id,
  label,
  error,
  ...props
}: React.ComponentProps<typeof Input> & {
  id: string;
  label: string;
  error?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        className="h-10"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function PasswordField({
  id,
  label,
  error,
  ...props
}: React.ComponentProps<typeof Input> & {
  id: string;
  label: string;
  error?: string;
}) {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={visible ? "text" : "password"}
          className="h-10 pr-10"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="absolute top-1 right-1"
          aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function OtpField({
  value,
  onChange,
  error,
  notice,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  notice?: string;
  disabled: boolean;
}) {
  return (
    <div className="grid justify-items-center gap-2">
      <InputOTP
        maxLength={OTP_LENGTH}
        pattern={REGEXP_ONLY_DIGITS}
        value={value}
        onChange={onChange}
        autoFocus
        autoComplete="one-time-code"
        aria-label="Mã xác minh"
        aria-invalid={Boolean(error)}
        disabled={disabled}
      >
        <InputOTPGroup>
          {Array.from({ length: OTP_LENGTH }, (_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className="size-10 text-base"
              aria-invalid={Boolean(error)}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
      {error && (
        <p role="alert" className="text-center text-xs text-destructive">
          {error}
        </p>
      )}
      {notice && (
        <p role="status" className="text-center text-xs text-emerald-700">
          {notice}
        </p>
      )}
    </div>
  );
}

function OtpFooter({
  backLabel,
  onBack,
  onResend,
  resendIn,
  busy,
}: {
  backLabel: string;
  onBack: () => void;
  onResend: () => void;
  resendIn: number;
  busy: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        disabled={busy}
        onClick={onBack}
      >
        <ArrowLeft aria-hidden />
        {backLabel}
      </Button>
      <Button
        type="button"
        variant="link"
        size="sm"
        disabled={busy || resendIn > 0}
        onClick={onResend}
      >
        {resendIn > 0 ? `Gửi lại mã sau ${resendIn}s` : "Gửi lại mã"}
      </Button>
    </div>
  );
}

function SubmitButton({
  busy,
  disabled,
  children,
}: {
  busy: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button
      type="submit"
      className="h-10 w-full"
      disabled={busy || disabled}
    >
      {busy && <Loader2 className="animate-spin" aria-hidden />}
      {children}
    </Button>
  );
}

function SwitchLink({
  prompt,
  label,
  disabled,
  onClick,
}: {
  prompt: string;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <p className="text-center text-xs text-muted-foreground">
      {prompt}{" "}
      <Button
        type="button"
        variant="link"
        className="h-auto p-0 text-xs"
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </Button>
    </p>
  );
}

function LoginFlow({
  busy,
  setBusy,
  initialEmail,
  notice,
  onSwitch,
  onDone,
}: FlowProps & { notice?: string; onDone: () => void }) {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState(initialEmail);
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const formRef = React.useRef<HTMLFormElement>(null);
  useFocusFirstInvalid(formRef, errors);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;

    const nextErrors: FormErrors = {};
    if (!EMAIL_PATTERN.test(email.trim())) nextErrors.email = INVALID_EMAIL;
    if (!password) nextErrors.password = "Vui lòng nhập mật khẩu.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setBusy(true);
    try {
      await dispatch(login(email.trim().toLowerCase(), password));
      onDone();
    } catch (error) {
      const { message, field } = toApiError(error);
      setErrors(
        field === "email" || field === "password"
          ? { [field]: message }
          : { general: message }
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4"
    >
      <DialogHeader>
        <DialogTitle className="text-lg">Đăng nhập WIVI</DialogTitle>
        <DialogDescription>
          Dùng email và mật khẩu của tài khoản WIVI.
        </DialogDescription>
      </DialogHeader>

      {notice && (
        <p role="status" className="text-xs text-emerald-700">
          {notice}
        </p>
      )}
      <GeneralError message={errors.general} />

      <TextField
        id="login-email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="ban@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email}
      />
      <div className="grid gap-1">
        <PasswordField
          id="login-password"
          label="Mật khẩu"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={errors.password}
        />
        <Button
          type="button"
          variant="link"
          className="h-auto justify-self-end p-0 text-xs"
          disabled={busy}
          onClick={() => onSwitch("reset", email)}
        >
          Quên mật khẩu?
        </Button>
      </div>

      <SubmitButton busy={busy}>Đăng nhập</SubmitButton>
      <SwitchLink
        prompt="Chưa có tài khoản?"
        label="Đăng ký"
        disabled={busy}
        onClick={() => onSwitch("register", email)}
      />
    </form>
  );
}

function ResetFlow({ busy, setBusy, initialEmail, onSwitch }: FlowProps) {
  const [step, setStep] = React.useState<"email" | "code">("email");
  const [email, setEmail] = React.useState(initialEmail);
  const [sentTo, setSentTo] = React.useState("");
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [notice, setNotice] = React.useState("");
  const [resendIn, startCooldown] = useResendCooldown();
  const formRef = React.useRef<HTMLFormElement>(null);
  useFocusFirstInvalid(formRef, errors);

  const handleEmailSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;

    const normalized = email.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(normalized)) {
      setErrors({ email: INVALID_EMAIL });
      return;
    }
    setErrors({});

    // Mã vừa gửi cho email này vẫn còn dùng được, và server chỉ cho gửi 1 lần/phút.
    if (normalized === sentTo && resendIn > 0) {
      setStep("code");
      return;
    }

    setBusy(true);
    try {
      await requestPasswordResetOtp(normalized);
      setSentTo(normalized);
      setCode("");
      setNotice("");
      startCooldown();
      setStep("code");
    } catch (error) {
      const { message, field } = toApiError(error);
      setErrors(field === "email" ? { email: message } : { general: message });
    } finally {
      setBusy(false);
    }
  };

  const handleResend = async () => {
    if (busy || resendIn > 0) return;

    setBusy(true);
    setErrors({});
    setNotice("");
    try {
      await requestPasswordResetOtp(sentTo);
      setCode("");
      startCooldown();
      setNotice("Đã gửi lại mã mới tới email của bạn.");
    } catch (error) {
      setErrors({ code: toApiError(error).message });
    } finally {
      setBusy(false);
    }
  };

  const handleResetSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy || code.length < OTP_LENGTH) return;

    const nextErrors: FormErrors = {};
    if (password.length < 6) nextErrors.password = SHORT_PASSWORD;
    if (confirmPassword !== password) {
      nextErrors.confirmPassword = PASSWORD_MISMATCH;
    }
    setErrors(nextErrors);
    setNotice("");
    if (Object.keys(nextErrors).length > 0) return;

    setBusy(true);
    try {
      await resetPassword({ email: sentTo, code, newPassword: password });
      onSwitch(
        "login",
        sentTo,
        "Đã đổi mật khẩu. Vui lòng đăng nhập bằng mật khẩu mới."
      );
    } catch (error) {
      const { message, field } = toApiError(error);
      if (field === "newPassword") {
        setErrors({ password: message });
      } else {
        setErrors({ code: message });
        setCode("");
      }
    } finally {
      setBusy(false);
    }
  };

  if (step === "email") {
    return (
      <form
        ref={formRef}
        onSubmit={handleEmailSubmit}
        noValidate
        className="grid gap-4"
      >
        <DialogHeader>
          <DialogTitle className="text-lg">Quên mật khẩu</DialogTitle>
          <DialogDescription>
            Nhập email tài khoản, chúng tôi sẽ gửi mã để đặt lại mật khẩu.
          </DialogDescription>
        </DialogHeader>
        <GeneralError message={errors.general} />
        <TextField
          id="reset-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="ban@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={errors.email}
        />
        <SubmitButton busy={busy}>Gửi mã</SubmitButton>
        <SwitchLink
          prompt="Đã nhớ mật khẩu?"
          label="Đăng nhập"
          disabled={busy}
          onClick={() => onSwitch("login", email)}
        />
      </form>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleResetSubmit}
      noValidate
      className="grid gap-4"
    >
      <DialogHeader>
        <DialogTitle className="text-lg">Đặt lại mật khẩu</DialogTitle>
        <DialogDescription>
          Mã {OTP_LENGTH} chữ số đã được gửi tới{" "}
          <span className="font-medium text-foreground">{sentTo}</span>. Mã có
          hiệu lực trong 5 phút.
        </DialogDescription>
      </DialogHeader>
      <OtpField
        value={code}
        onChange={setCode}
        error={errors.code}
        notice={notice}
        disabled={busy}
      />
      <PasswordField
        id="reset-password"
        label="Mật khẩu mới"
        autoComplete="new-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        error={errors.password}
      />
      <PasswordField
        id="reset-confirmPassword"
        label="Xác nhận mật khẩu mới"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        error={errors.confirmPassword}
      />
      <SubmitButton busy={busy} disabled={code.length < OTP_LENGTH}>
        Đổi mật khẩu
      </SubmitButton>
      <OtpFooter
        backLabel="Đổi email"
        onBack={() => {
          setErrors({});
          setStep("email");
        }}
        onResend={handleResend}
        resendIn={resendIn}
        busy={busy}
      />
    </form>
  );
}

function RegisterFlow({
  busy,
  setBusy,
  initialEmail,
  onSwitch,
  onClose,
}: FlowProps & { onClose: () => void }) {
  const dispatch = useAppDispatch();
  const [step, setStep] = React.useState<"form" | "otp" | "success">("form");
  const [email, setEmail] = React.useState(initialEmail);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [otpEmail, setOtpEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [otpError, setOtpError] = React.useState("");
  const [otpNotice, setOtpNotice] = React.useState("");
  const [resendIn, startCooldown] = useResendCooldown();
  const verified = React.useRef<{ email: string; token: string } | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  useFocusFirstInvalid(formRef, errors);

  const showFormErrors = (nextErrors: FormErrors) => {
    setErrors(nextErrors);
    setStep("form");
  };

  const handleRegisterError = (error: unknown) => {
    const { status, message, field } = toApiError(error);

    if (
      field &&
      ["email", "username", "password", "confirmPassword"].includes(field)
    ) {
      showFormErrors({ [field]: message });
    } else if (message.includes("Tên đăng nhập")) {
      showFormErrors({ username: message });
    } else if (message.includes("đã được đăng ký")) {
      showFormErrors({ email: message });
    } else {
      // Mọi lỗi 400 còn lại là token sai/hết hạn: phải xin OTP mới.
      if (status === 400) verified.current = null;
      showFormErrors({ general: message });
    }
  };

  const createAccount = async (accountEmail: string, token: string) => {
    try {
      const response = await register({
        email: accountEmail,
        username: username.trim(),
        password,
        registrationToken: token,
      });
      verified.current = null;
      setPassword("");
      setConfirmPassword("");
      setOtpEmail(accountEmail);
      void dispatch(startSession(response));
      setStep("success");
    } catch (error) {
      handleRegisterError(error);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;

    const nextErrors: FormErrors = {};
    const trimmedUsername = username.trim();
    if (!EMAIL_PATTERN.test(email.trim())) nextErrors.email = INVALID_EMAIL;
    if (trimmedUsername.length < 3 || trimmedUsername.length > 50) {
      nextErrors.username = "Tên đăng nhập phải có từ 3 đến 50 ký tự.";
    }
    if (password.length < 6) nextErrors.password = SHORT_PASSWORD;
    if (confirmPassword !== password) {
      nextErrors.confirmPassword = PASSWORD_MISMATCH;
    }
    if (!agreed) {
      nextErrors.terms = "Vui lòng đồng ý với điều khoản để tiếp tục.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const normalized = email.trim().toLowerCase();
    if (verified.current?.email === normalized) {
      setBusy(true);
      await createAccount(normalized, verified.current.token);
      setBusy(false);
      return;
    }
    verified.current = null;

    // Mã vừa gửi cho email này vẫn còn dùng được, và server chỉ cho gửi 1 lần/phút.
    if (normalized === otpEmail && resendIn > 0) {
      setStep("otp");
      return;
    }

    setBusy(true);
    try {
      await requestRegistrationOtp(normalized);
      setOtpEmail(normalized);
      setCode("");
      setOtpError("");
      setOtpNotice("");
      startCooldown();
      setStep("otp");
    } catch (error) {
      const { message, field } = toApiError(error);
      showFormErrors(
        field === "email" || message.includes("đã được đăng ký")
          ? { email: message }
          : { general: message }
      );
    } finally {
      setBusy(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy || code.length < OTP_LENGTH) return;

    setBusy(true);
    setOtpError("");
    setOtpNotice("");
    try {
      const { registrationToken } = await verifyRegistrationOtp(otpEmail, code);
      verified.current = { email: otpEmail, token: registrationToken };
      await createAccount(otpEmail, registrationToken);
    } catch (error) {
      setOtpError(toApiError(error).message);
      setCode("");
    } finally {
      setBusy(false);
    }
  };

  const handleResend = async () => {
    if (busy || resendIn > 0) return;

    setBusy(true);
    setOtpError("");
    setOtpNotice("");
    try {
      await requestRegistrationOtp(otpEmail);
      setCode("");
      startCooldown();
      setOtpNotice("Đã gửi lại mã mới tới email của bạn.");
    } catch (error) {
      setOtpError(toApiError(error).message);
    } finally {
      setBusy(false);
    }
  };

  if (step === "success") {
    return (
      <>
        <DialogHeader className="items-center text-center">
          <CheckCircle2 className="size-12 text-emerald-600" aria-hidden />
          <DialogTitle className="text-lg">Tạo tài khoản thành công</DialogTitle>
          <DialogDescription>
            Bạn đã đăng nhập bằng{" "}
            <span className="font-medium text-foreground">{otpEmail}</span>. Tải
            app WIVI để bắt đầu quản lý tài chính của bạn.
          </DialogDescription>
        </DialogHeader>
        <Button asChild className="h-10 w-full">
          <a href="#download" onClick={onClose}>
            Tải App
          </a>
        </Button>
      </>
    );
  }

  if (step === "otp") {
    return (
      <form onSubmit={handleOtpSubmit} className="grid gap-4">
        <DialogHeader>
          <DialogTitle className="text-lg">Nhập mã xác minh</DialogTitle>
          <DialogDescription>
            Mã {OTP_LENGTH} chữ số đã được gửi tới{" "}
            <span className="font-medium text-foreground">{otpEmail}</span>. Mã
            có hiệu lực trong 5 phút.
          </DialogDescription>
        </DialogHeader>
        <OtpField
          value={code}
          onChange={setCode}
          error={otpError}
          notice={otpNotice}
          disabled={busy}
        />
        <SubmitButton busy={busy} disabled={code.length < OTP_LENGTH}>
          Xác minh & tạo tài khoản
        </SubmitButton>
        <OtpFooter
          backLabel="Sửa thông tin"
          onBack={() => setStep("form")}
          onResend={handleResend}
          resendIn={resendIn}
          busy={busy}
        />
      </form>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleFormSubmit}
      noValidate
      className="grid gap-4"
    >
      <DialogHeader>
        <DialogTitle className="text-lg">Tạo tài khoản WIVI</DialogTitle>
        <DialogDescription>
          Chúng tôi sẽ gửi mã xác minh tới email của bạn.
        </DialogDescription>
      </DialogHeader>

      <GeneralError message={errors.general} />

      <TextField
        id="register-email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="ban@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email}
      />
      <TextField
        id="register-username"
        label="Tên đăng nhập"
        autoComplete="username"
        autoCapitalize="none"
        spellCheck={false}
        placeholder="nguyenvana"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        error={errors.username}
      />
      <PasswordField
        id="register-password"
        label="Mật khẩu"
        autoComplete="new-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        error={errors.password}
      />
      <PasswordField
        id="register-confirmPassword"
        label="Xác nhận mật khẩu"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        error={errors.confirmPassword}
      />

      <div className="grid gap-1.5">
        <div className="flex items-start gap-2">
          <Checkbox
            id="register-terms"
            className="mt-0.5"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked === true)}
            aria-invalid={Boolean(errors.terms)}
            aria-describedby={errors.terms ? "register-terms-error" : undefined}
          />
          <Label
            htmlFor="register-terms"
            className="text-xs leading-relaxed font-normal text-muted-foreground"
          >
            Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật của WIVI.
          </Label>
        </div>
        <FieldError id="register-terms-error" message={errors.terms} />
      </div>

      <SubmitButton busy={busy}>Tiếp tục</SubmitButton>
      <SwitchLink
        prompt="Đã có tài khoản?"
        label="Đăng nhập"
        disabled={busy}
        onClick={() => onSwitch("login", email)}
      />
    </form>
  );
}

function AuthFlow({
  initialMode,
  busy,
  setBusy,
  onClose,
}: {
  initialMode: Mode;
  busy: boolean;
  setBusy: (busy: boolean) => void;
  onClose: () => void;
}) {
  const [{ mode, email, notice }, setView] = React.useState<{
    mode: Mode;
    email: string;
    notice?: string;
  }>({ mode: initialMode, email: "" });

  const shared: FlowProps = {
    busy,
    setBusy,
    initialEmail: email,
    onSwitch: (nextMode, nextEmail, nextNotice) =>
      setView({ mode: nextMode, email: nextEmail, notice: nextNotice }),
  };

  if (mode === "login") {
    return <LoginFlow {...shared} notice={notice} onDone={onClose} />;
  }
  if (mode === "reset") return <ResetFlow {...shared} />;
  return <RegisterFlow {...shared} onClose={onClose} />;
}

function clearHash() {
  // Xoá hash để lần bấm sau vẫn phát sinh hashchange.
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
}

export function AuthDialog() {
  const store = useStore<RootState>();
  const [openMode, setOpenMode] = React.useState<Mode | null>(null);
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    const syncWithHash = () => {
      const mode = MODE_BY_HASH[window.location.hash];
      if (!mode) return;
      if (store.getState().auth.user) {
        clearHash();
      } else {
        setOpenMode(mode);
      }
    };
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, [store]);

  const close = () => {
    setOpenMode(null);
    clearHash();

    const { checkoutPending, user } = store.getState().auth;
    if (checkoutPending) {
      store.dispatch(checkoutPendingSet(false));
      if (user) window.location.hash = "#mua-goi";
    }
  };

  return (
    <Dialog
      open={openMode !== null}
      onOpenChange={(next) => {
        if (!next && !busy) close();
      }}
    >
      <DialogContent
        className="max-h-[90svh] gap-4 overflow-y-auto border border-border p-5 sm:max-w-md sm:p-6"
        onInteractOutside={(event) => event.preventDefault()}
      >
        {openMode && (
          <AuthFlow
            initialMode={openMode}
            busy={busy}
            setBusy={setBusy}
            onClose={close}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
