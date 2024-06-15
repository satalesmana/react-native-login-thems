import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    nim: null,
    firstName: null,
      email: null,
      password: null,
      programStudy:null,
      kodeKelas:null,
      telp: null
  },
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
    setNim: (state, action) => {
      state.nim = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setProgramStudy: (state, action) => {
      state.programStudy = action.payload;
    },
    setKodeKelas: (state, action) => {
      state.kodeKelas = action.payload;
    },
    setTelp: (state, action) => {
      state.telp = action.payload;
    },
    clearAuth:(state)=>{
      state.nim = null
      state.firstName=null
      state.email=null
      state.password=null
      state.programStudy=null
      state.kodeKelas=null
      state.telp=null
    }
  },
});

export const { setAuthData,setEmail,setFirstName,setPassword,setProgramStudy,setKodeKelas,setTelp, clearAuth } = authSlice.actions;

export default authSlice.reducer;
