import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        email: null,
        password: null,
        confirmPassword: null
    }
  },
  reducers: {
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    setConfirmPassword:(state, action) => {
        state.formInput.confirmPassword = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setEmail,
    setPassword,
    setConfirmPassword
 } = registerSlice.actions

export default registerSlice.reducer