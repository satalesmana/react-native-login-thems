import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formSignUp:{
        firstName : null,
        lastName : null,
        nim : null,
        prodi : null,
        classCode : null,
        noTelp : null,
        email: null,
        password: null,
    },
  },
  reducers: {
    setFirstName:(state, action) => {
      state.formSignUp.firstName = action.payload
    },
    setLastName:(state, action) => {
      state.formSignUp.lastName = action.payload
    },
    setNim:(state, action) => {
      state.formSignUp.nim = action.payload
    },
    setProdi:(state, action) => {
      state.formSignUp.prodi = action.payload
    },
    setClassCode:(state, action) => {
      state.formSignUp.classCode = action.payload
    },
    setNoTlp:(state, action) => {
      state.formSignUp.noTelp = action.payload
    },
    setEmail:(state, action) => {
        state.formSignUp.email = action.payload
    },
    setPassword:(state, action) => {
        state.formSignUp.password = action.payload
    },
    resetRegisterData:(state) =>{
        state.formSignUp = {
            firstName : null,
            lastName : null,
            nim : null,
            prodi : null,
            classCode : null,
            noTelp : null,
            email: null,
            password: null,
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setFirstName,
    setLastName,
    setNim,
    setProdi,
    setClassCode,
    setNoTlp,
    setEmail,
    setPassword,
    resetRegisterData
 } = registerSlice.actions

export default registerSlice.reducer