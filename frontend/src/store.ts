import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import referralReducer from "./features/referral/slice"

export const store = configureStore({
  reducer: {
    referral: referralReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;