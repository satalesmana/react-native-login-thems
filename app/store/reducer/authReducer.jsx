import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    email: null,
    password: null
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearAuth: (state) => {
      state.id = null,
      state.email = null,
      state.password = null
    },
  },
});

export const { setId, setEmail, setPassword, clearAuth } =
  authSlice.actions;

export default authSlice.reducer;
