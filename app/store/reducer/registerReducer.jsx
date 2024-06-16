import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        nim: null,
        firstName: null,
        email: null,
        password: null,
        programStudy: null,
        kodeKelas: null,
        telp: null,
    },
  },
  reducers: {
    setNim: (state, action) => {
      state.formInput.nim = action.payload;
    },
    setFirstName:(state, action) => {
      state.formInput.firstName = action.payload
    },
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    setProgramStudy: (state, action) => {
      state.formInput.programStudy = action.payload;
    },
    setKodeKelas: (state, action) => {
      state.formInput.kodeKelas = action.payload;
    },
    setTelp: (state, action) => {
      state.formInput.telp = action.payload;
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            firstName: null,
            email: null,
            password: null
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const {
    setNim,
    setFirstName,
    setEmail,
    setPassword,
    setKodeKelas,
    setProgramStudy,
    setTelp,
    resetRegisterData
 } = registerSlice.actions

export default registerSlice.reducer