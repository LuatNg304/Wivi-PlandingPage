import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as authApi from "@/services/authApi";
import type { AuthResponse, UserProfile } from "@/services/authApi";
import type { AppDispatch, RootState } from "./index";

const SESSION_STORAGE_KEY = "wivi_session";

interface AuthState {
  user: UserProfile | null;
  accessToken: string | null;
  // Người dùng bấm mua khi chưa đăng nhập: mở lại thanh toán sau khi đăng nhập.
  checkoutPending: boolean;
}

const emptyState: AuthState = {
  user: null,
  accessToken: null,
  checkoutPending: false,
};

// Phiên giữ qua reload nhưng mất khi đóng tab. Refresh token không được lưu.
function readStoredSession(): AuthState {
  try {
    const stored = JSON.parse(
      sessionStorage.getItem(SESSION_STORAGE_KEY) ?? "null"
    );
    if (stored?.user && stored?.accessToken) {
      return {
        ...emptyState,
        user: stored.user,
        accessToken: stored.accessToken,
      };
    }
  } catch {
    // Storage bị chặn hoặc dữ liệu hỏng: coi như chưa đăng nhập.
  }
  return emptyState;
}

export function persistSession({ user, accessToken }: AuthState) {
  try {
    if (user && accessToken) {
      sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify({ user, accessToken })
      );
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  } catch {
    // Không lưu được thì phiên vẫn chạy trong bộ nhớ.
  }
}

const initialState = readStoredSession();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sessionStarted(
      state,
      action: PayloadAction<{ user: UserProfile; accessToken: string }>
    ) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    profileLoaded(state, action: PayloadAction<UserProfile>) {
      state.user = action.payload;
    },
    sessionCleared() {
      return emptyState;
    },
    checkoutPendingSet(state, action: PayloadAction<boolean>) {
      state.checkoutPending = action.payload;
    },
  },
});

const { sessionStarted, profileLoaded } = authSlice.actions;
export const { sessionCleared, checkoutPendingSet } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const startSession =
  ({ accessToken, id, email, username, fullName }: AuthResponse) =>
  async (dispatch: AppDispatch) => {
    dispatch(
      sessionStarted({
        user: { id, email, username, fullName },
        accessToken,
      })
    );
    // Login và register không trả avatarUrl nên lấy thêm từ profile.
    await dispatch(loadProfile());
  };

// Cũng chạy khi tải trang để loại phiên đã lưu nhưng token đã hết hạn.
export const loadProfile =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { accessToken } = getState().auth;
    if (!accessToken) return;

    try {
      const profile = await authApi.getMe(accessToken);
      if (getState().auth.accessToken === accessToken) {
        dispatch(profileLoaded(profile));
      }
    } catch (error) {
      if (
        error instanceof authApi.ApiError &&
        error.status === 401 &&
        getState().auth.accessToken === accessToken
      ) {
        dispatch(sessionCleared());
      }
    }
  };

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    const response = await authApi.login(email, password);
    void dispatch(startSession(response));
  };

export const logout =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const token = getState().auth.accessToken;
    dispatch(sessionCleared());
    // Phiên phía client đã xoá, nên lỗi ở đây không cần báo cho người dùng.
    if (token) authApi.logout(token).catch(() => {});
  };

export default authSlice.reducer;
