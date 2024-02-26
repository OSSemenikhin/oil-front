import { configureStore } from "@reduxjs/toolkit";
import topBarMenuReducer from "@/app/Store/model/topBarMenuSlice";
import heroHeightSlice from "@/app/Store/model/heroHeightSlice";
import breadcrumbsHeightSlice from "@/app/Store/model/breadcrumbsHeightSlice";

export const Store = configureStore({
  reducer: {
    topBarMenu: topBarMenuReducer,
    heroHeight: heroHeightSlice,
    breadcrumbsHeight: breadcrumbsHeightSlice,
  }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
