import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    formInput: {
      firstName: null,
      email: null,
      nim:null,
      jurusan:null,
      kode:null,
      number:null,
      password: null,
    },
  },
  reducers: {
    setFirstName: (state, action) => {
      state.formInput.firstName = action.payload;
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
    setNumber: (state, action) => {
      state.formInput.number = action.payload;
    },
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    resetRegisterData: (state) => {
      state.formInput = {
        firstName: null,
        email: null,
        nim:null,
        jurusan:null,
        kode:null,
        number:null,
        password: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setEmail, setPassword, setJurusan,setKode,setNim,setNumber,resetRegisterData } =
  registerSlice.actions;

export default registerSlice.reducer;
