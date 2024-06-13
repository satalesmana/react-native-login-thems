import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: {
      id: null,
      firstName: null,
      sureName: null,
      gender: null,
      email: null,
      password: null,
      birthDate: null,
    },
  },
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
    clearAuth: (state) => {
      state.authData.id = null;
      state.authData.firstName = null;
      state.authData.sureName = null;
      state.authData.gender = null;
    },
  },
});

export const { setAuthData, clearAuth } = authSlice.actions;

export default authSlice.reducer;
