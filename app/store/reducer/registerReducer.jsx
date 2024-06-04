import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        email: null,
        name: null,
        pass: null,
        
    },
    
    
  },
  reducers: {
    setemail:(state, action) => {
        state.formInput.email = action.payload
    },
    setname:(state, action) => {
        state.formInput.name = action.payload
    },
    setpass:(state, action) => {
        state.formInput.pass = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setemail,
    setname,
    setpass,
 } = registerSlice.actions

export default registerSlice.reducer