import { configureStore } from "@reduxjs/toolkit";
import heroHeightSlice from "@/app/Store/model/heroHeightSlice";
import breadcrumbsHeightSlice from "@/app/Store/model/breadcrumbsHeightSlice";

export const Store = configureStore({
  reducer: {
    heroHeight: heroHeightSlice,
    breadcrumbsHeight: breadcrumbsHeightSlice,
  }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
