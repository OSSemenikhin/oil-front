import { configureStore } from "@reduxjs/toolkit";
import topBarMenuReducer from "@/widgets/Header/model/topBarMenuSlice";
import heroHeightSlice from "@/shared/model/heroHeightSlice";

export const Store = configureStore({
  reducer: {
    topBarMenu: topBarMenuReducer,
    heroHeigh: heroHeightSlice,
  }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
