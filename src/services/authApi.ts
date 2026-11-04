const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://160.30.161.213:3000";
const REQUEST_TIMEOUT_MS = 15000;

export class ApiError extends Error {
  status: number;
  field?: string;

  constructor(status: number, message: string, field?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.field = field;
  }
}

export interface AuthResponse {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  accessToken: string;
}

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  avatarUrl?: string | null;
}

async function request<T>(
  method: "GET" | "POST",
  path: string,
  { body, token }: { body?: unknown; token?: string } = {}
): Promise<T> {
  const headers: Record<string, string> = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (token) headers.Authorization = `Bearer ${token}`;

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new ApiError(
      0,
      "Không kết nối được máy chủ. Vui lòng kiểm tra mạng và thử lại."
    );
  }

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message = Array.isArray(data?.message)
      ? data.message.join(", ")
      : data?.message;
    throw new ApiError(
      response.status,
      message || "Đã có lỗi xảy ra. Vui lòng thử lại.",
      data?.field
    );
  }
  return data as T;
}

export function requestRegistrationOtp(email: string) {
  return request<{ message: string }>(
    "POST",
    "/api/v1/auth/registration/otp/request",
    { body: { email } }
  );
}

export function verifyRegistrationOtp(email: string, code: string) {
  return request<{ registrationToken: string }>(
    "POST",
    "/api/v1/auth/registration/otp/verify",
    { body: { email, code } }
  );
}

export function register(payload: {
  email: string;
  username: string;
  password: string;
  registrationToken: string;
}) {
  return request<AuthResponse>("POST", "/api/v1/auth/register", {
    body: payload,
  });
}

export function login(email: string, password: string) {
  return request<AuthResponse>("POST", "/api/v1/auth/login", {
    body: { email, password },
  });
}

export function getMe(token: string) {
  return request<UserProfile>("GET", "/api/v1/user/me", { token });
}

export function logout(token: string) {
  return request<{ message: string }>("POST", "/api/v1/auth/logout", { token });
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  code: string;
  price: string | number;
  features: string[] | null;
}

export interface MySubscription {
  isPremium: boolean;
  plan: SubscriptionPlan | null;
  expiresAt: string | null;
}

export interface CheckoutOrder {
  orderCode: string;
  planName: string;
  amount: string | number;
  qrCodeUrl: string;
  transferInfo: {
    bankName: string;
    accountNumber: string;
    accountHolderName: string;
    transferContent: string;
  };
}

export function getSubscriptionPlans() {
  return request<SubscriptionPlan[]>("GET", "/api/v1/subscriptions/plans");
}

export function getMySubscription(token: string) {
  return request<MySubscription>("GET", "/api/v1/subscriptions/me", { token });
}

export function checkoutSubscription(token: string, planCode: string) {
  return request<CheckoutOrder>("POST", "/api/v1/subscriptions/checkout", {
    token,
    body: { planCode },
  });
}

export function getSubscriptionOrder(token: string, orderCode: string) {
  return request<{ status: "Pending" | "Paid" | "Failed" | "Cancelled" }>(
    "GET",
    `/api/v1/subscriptions/orders/${encodeURIComponent(orderCode)}`,
    { token }
  );
}

export function requestPasswordResetOtp(email: string) {
  return request<{ message: string }>(
    "POST",
    "/api/v1/auth/password-reset/otp/request",
    { body: { email } }
  );
}

export function resetPassword(payload: {
  email: string;
  code: string;
  newPassword: string;
}) {
  return request<{ message: string }>("POST", "/api/v1/auth/reset-password", {
    body: payload,
  });
}
