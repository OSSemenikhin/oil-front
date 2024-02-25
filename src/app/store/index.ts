import { configureStore } from "@reduxjs/toolkit";
import topBarMenuReducer from "@/widgets/Header/ui/TopBar/model/topBarMenuSlice";

export const store = configureStore({
  reducer: { topBarMenu: topBarMenuReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
