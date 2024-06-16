import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    formInput: {
      email: null,
      name: null,
      pass: null,
      nim: null,
      prodi: null,
      phone: null,
      kelas: null,
    },
  },
  reducers: {
    setemail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setname: (state, action) => {
      state.formInput.name = action.payload;
    },
    setnim: (state, action) => {
      state.formInput.nim = action.payload;
    },
    setprodi: (state, action) => {
      state.formInput.prodi = action.payload;
    },
    setkelas: (state, action) => {
      state.formInput.kelas = action.payload;
    },
    setphone: (state, action) => {
      state.formInput.phone = action.payload;
    },
    setpass: (state, action) => {
      state.formInput.pass = action.payload;
    },
    resetRegisterData: (state) => {
      state.formInput = {
        email: null,
        name: null,
        pass: null,
        nim: null,
        prodi: null,
        kelas: null,
        phone: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setemail,
  setname,
  setpass,
  setnim,
  setprodi,
  setkelas,
  setphone,
  resetRegisterData,
} = registerSlice.actions;

export default registerSlice.reducer;
