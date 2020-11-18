import { createSlice } from "@reduxjs/toolkit";

export const signupPageSlice = createSlice({
  name: "signupPage",
  initialState: 1,
  reducers: {
    setSignupPage: (state, action) => (state = action.payload),
  },
});

export const { setSignupPage } = signupPageSlice.actions;

export default signupPageSlice.reducer;
