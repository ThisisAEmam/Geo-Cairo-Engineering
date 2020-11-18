import { createSlice } from "@reduxjs/toolkit";

export const signupInfoSlice = createSlice({
  name: "Signup Info",
  initialState: { email: "", password: "", plan: "" },
  reducers: {
    setSignupInfo: (state, action) => (state = action.payload),
  },
});

export const { setSignupInfo } = signupInfoSlice.actions;

export default signupInfoSlice.reducer;
