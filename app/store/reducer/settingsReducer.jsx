import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: 'settings',
  initialState: {
    formInput: {
      email: null,
      number: null,
      pass: null,
      nim:null,
      jurusan:null,
      kode:null
    },
  },
  reducers: {
    setNim: (state, action) => {
      state.formInput.nim = action.payload;
    },
    setJurusan: (state, action) => {
      state.formInput.jurusan = action.payload;
    },
    setKode: (state, action) => {
      state.formInput.kode = action.payload;
    },
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },

    setNumber: (state, action) => {
        state.formInput.number = action.payload;
      },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    resetRegisterData: (state) => {
      state.formInput = {
        email: null,
        number: null,
        password: null,
        nim:null,
        jurusan:null,
        kode:null
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setEmail,
  setNumber,
  setPassword,
  setJurusan,
  setKode,
  setNim,
  resetRegisterData
} = registerSlice.actions;

export default registerSlice.reducer;