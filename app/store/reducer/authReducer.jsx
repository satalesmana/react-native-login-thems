import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    username: null,
    email: null,
    nim: null,
    prodi: null,
    class: null,
    phone: null,
    password: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setNim: (state, action) => {
      state.nim = action.payload;
    },
    setProdi: (state, action) => {
      state.prodi = action.payload;
    },
    setClass: (state, action) => {
      state.class = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearAuth: (state) => {
      state.id = null,
      state.username = null,
      state.email = null,
      state.nim = null,
      state.prodi = null,
      state.class = null,
      state.phone = null,
      state.password = null
    },
  },
});

export const { setId, setUsername, setEmail, setNim, setProdi, setClass, setPhone, setPassword, clearAuth } =
  authSlice.actions;

export default authSlice.reducer;
