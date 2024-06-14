import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
      id: null,
      firstName: null,
      // sureName: null,
      // gender: null,
      email: null,
      password: null,
      // birthDate: null, 
  },
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setNim: (state, action) => {
      state.nim = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearAuth:(state)=>{
      state.id = null
      state.firstName=null
      state.email=null
      state.password=null
    }
  },
});

export const { setId,setEmail,setAuthData,setFirstName,setPassword, clearAuth } = authSlice.actions;

export default authSlice.reducer;
