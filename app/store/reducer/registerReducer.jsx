import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        email: null,
        password: null,
        username:null
    },
  },
  reducers: {
    setEmail:(state, action) => {
        state.formInput.email= action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    setUsername:(state, action) => {
        state.formInput.username = action.payload
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            email: null,
            password: null,
            username:null
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setEmail,
    setPassword,
    resetRegisterData,
    setUsername
 } = registerSlice.actions

export default registerSlice.reducer