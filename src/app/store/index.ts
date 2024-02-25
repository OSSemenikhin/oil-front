import { configureStore } from "@reduxjs/toolkit";
import topBarMenuReducer from "@/app/Store/model/topBarMenuSlice";
import heroHeightSlice from "@/app/Store/model/heroHeightSlice";

export const Store = configureStore({
  reducer: {
    topBarMenu: topBarMenuReducer,
    heroHeigh: heroHeightSlice,
  }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
