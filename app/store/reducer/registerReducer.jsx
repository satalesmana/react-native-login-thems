import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        firstName: null,
        sureName: null,
        email: null,
        password: null,
    }
  },
  reducers: {
    setFirstName:(state, action) => {
        state.formInput.firstName = action.payload
    },
    setSureName:(state, action) => {
        state.formInput.sureName = action.payload
    },
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            firstName: null,
            sureName: null,
            email: null,
            password: null,
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setFirstName,
    setSureName,
    setEmail,
    setPassword,
    resetRegisterData
 } = registerSlice.actions

export default registerSlice.reducer