import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    formInput: {
      username: null,
      email: null,
      nim: null,
      prodi: null,
      class: null,
      phone: null,
      password: null,
    },
  },
  reducers: {
    setUsername: (state, action) => {
      state.formInput.username = action.payload;
    },
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setNim: (state, action) => {
      state.formInput.nim = action.payload;
    },
    setProdi: (state, action) => {
      state.formInput.prodi = action.payload;
    },
    setClass: (state, action) => {
      state.formInput.class = action.payload;
    },
    setPhone: (state, action) => {
      state.formInput.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    resetRegisterData: (state) => {
      state.formInput = {
        username: null,
        email: null,
        nim: null,
        prodi: null,
        class: null,
        phone: null,
        password: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername, setEmail, setClass, setNim, setPhone, setProdi ,setPassword, resetRegisterData } =
  registerSlice.actions;

export default registerSlice.reducer;
 