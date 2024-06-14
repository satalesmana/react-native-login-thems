import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    formInput: {
      email: null,
      number: null,
      pass: null,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setNumber: (state, action) => {
        state.formInput.number = action.payload;
      },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    resetRegisterData: (state) => {
      state.formInput = {
        email: null,
        number: null,
        password: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setEmail,
  setNumber,
  setPassword,
  resetRegisterData
} = authSlice.actions;

export default authSlice.reducer;