import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    formInput: {
      firstName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
  },
  reducers: {
    setFirstName: (state, action) => {
      state.formInput.firstName = action.payload;
    },
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.formInput.confirmPassword = action.payload;
    },
    resetRegisterData:(state)=>{
      state.formInput ={
        firstName: null,
        email: null,
        password: null,
        confirmPassword: null,
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setEmail, setPassword, setConfirmPassword,resetRegisterData } =
  registerSlice.actions;

export default registerSlice.reducer;
