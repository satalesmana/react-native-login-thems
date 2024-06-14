import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: 'auth',
  initialState: {
    formInput: {
      firstname : null,
      surename : null,
      email: null,
      number: null,
      pass: null,
      nim:null,
      jurusan:null,
      kode:null
    },
  },
  reducers: {
    setFirstname: (state, action) => {
      state.formInput.firstname = action.payload;
    },
    setSurename: (state, action) => {
      state.formInput.surename = action.payload;
    },
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
        firstname: null,
        surename: null,
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
  setFirstname,
  setSurename,
  setEmail,
  setNumber,
  setPassword,
  setJurusan,
  setKode,
  setNim,
  resetresetData
} = registerSlice.actions;

export default registerSlice.reducer;