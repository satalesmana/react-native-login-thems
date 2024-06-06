import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    formInput:{
        username:null,
        email:null,
        password:null
    },
    // optGender:[
    //     {label:"Laki-Laki",value:"L"},
    //     {label:"Perempuan",value:"P"}
    // ]
  },
  reducers: {
    setUsername:(state, action) => {
        state.formInput.username = action.payload
    },
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setUsername,
    setEmail,
    setPassword,
 } = registerSlice.actions

export default registerSlice.reducer