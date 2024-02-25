import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNavLink } from 'shared/types';

export type TTopBarMenuState = {
  topBarMenu: { list: TNavLink[] };
}

export const topBarMenuSlice = createSlice({
  name: "topBarMenuList",
  initialState: { list: [] },
  reducers: {
    getList: () => {
      console.log("get list");
    }
  },
});

export const { getList } = topBarMenuSlice.actions;
export default topBarMenuSlice.reducer;
