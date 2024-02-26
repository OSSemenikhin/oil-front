import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type THeroState = {
  topBarMenu: { height: number };
}

export const breadcrumbsHeightSlice = createSlice({
  name: "breadcrumbsHeightSlice",
  initialState: { height: 0 },
  reducers: {
    setHeight: (state, action: PayloadAction<number>) => {
      return { height: action.payload };
    }
  },
});

export const { setHeight } = breadcrumbsHeightSlice.actions;
export default breadcrumbsHeightSlice.reducer;
