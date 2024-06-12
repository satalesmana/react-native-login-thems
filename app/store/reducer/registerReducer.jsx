import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    formInput:{
        firstname:null,
        email:null,
        password:null
    },
    // optGender:[
    //     {label:"Laki-Laki",value:"L"},
    //     {label:"Perempuan",value:"P"}
    // ]
  },
  reducers: {
    setFirstname:(state, action) => {
        state.formInput.firstname= action.payload
    },
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    resetRegisterData: (state) => {
      state.formInput = {
        firstName: null,
        email: null,
        password: null,
      };
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setFirstname,
    setEmail,
    setPassword,
    resetRegisterData
 } = registerSlice.actions

export default registerSlice.reducer