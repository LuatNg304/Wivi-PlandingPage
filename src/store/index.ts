import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer, { loadProfile, persistSession } from "./authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
  // Store có access token, không để lộ qua Redux DevTools trên production.
  devTools: import.meta.env.DEV,
});

store.subscribe(() => persistSession(store.getState().auth));
void store.dispatch(loadProfile());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
