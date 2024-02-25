import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type THeroState = {
  topBarMenu: { height: number };
}

export const heroHeightSlice = createSlice({
  name: "heroHeightSlice",
  initialState: { height: 0 },
  reducers: {
    getHeight: () => {
      console.log("get height");
    }
  },
});

export const { getHeight } = heroHeightSlice.actions;
export default heroHeightSlice.reducer;
