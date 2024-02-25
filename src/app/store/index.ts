import { configureStore } from "@reduxjs/toolkit";
import topBarMenuReducer from "@/widgets/Header/model/topBarMenuSlice";

export const Store = configureStore({
  reducer: { topBarMenu: topBarMenuReducer }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
