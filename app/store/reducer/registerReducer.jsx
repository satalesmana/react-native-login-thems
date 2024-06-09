import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        email: null,
        password: null,
    },
  },
  reducers: {
    setEmail:(state, action) => {
        state.formInput.email= action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            email: null,
            password: null,
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setEmail,
    setPassword,
    resetRegisterData
 } = registerSlice.actions

export default registerSlice.reducer