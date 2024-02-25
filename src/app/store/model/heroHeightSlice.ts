import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type THeroState = {
  topBarMenu: { height: number };
}

export const heroHeightSlice = createSlice({
  name: "heroHeightSlice",
  initialState: { height: 0 },
  reducers: {
    setHeight: (state, action: PayloadAction<number>) => {
      return { height: action.payload };
    }
  },
});

export const { setHeight } = heroHeightSlice.actions;
export default heroHeightSlice.reducer;
