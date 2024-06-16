import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    name: null,
    email: null,
    nim: null,
    prodi: null,
    phone: null,
    kelas: null,
    password: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setname: (state, action) => {
      state.name = action.payload;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
    setnim: (state, action) => {
      state.nim = action.payload;
    },
    setprodi: (state, action) => {
      state.prodi = action.payload;
    },
    setphone: (state, action) => {
      state.phone = action.payload;
    },
    setkelas: (state, action) => {
      state.kelas = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearAuth: (state) => {
      (state.id = null),
        (state.name = null),
        (state.email = null),
        (state.nim = null),
        (state.prodi = null),
        (state.kelas = null),
        (state.phone = null),
        (state.password = null);
    },
  },
});

export const {
  setId,
  setemail,
  setPassword,
  setname,
  setkelas,
  setnim,
  setphone,
  setprodi,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;
