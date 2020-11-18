import { createSlice } from "@reduxjs/toolkit";

export const sideDrawerSlice = createSlice({
  name: "sideDrawer",
  initialState: false,
  reducers: {
    setSideDrawer: (state, action) => (state = action.payload),
  },
});

export const { setSideDrawer } = sideDrawerSlice.actions;

export default sideDrawerSlice.reducer;
