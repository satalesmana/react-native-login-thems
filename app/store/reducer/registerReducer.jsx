import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formSignUp:{
        email: null,
        password: null,
    },
  },
  reducers: {
    setEmail:(state, action) => {
        state.formSignUp.email = action.payload
    },
    setPassword:(state, action) => {
        state.formSignUp.password = action.payload
    },
    resetRegisterData:(state) =>{
        state.formSignUp = {
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