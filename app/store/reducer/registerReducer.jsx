import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "Login",
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
      state.formInput.pass = action.payload;
    },
    resetRegisterData: (state) => {
      state.formInput = {
        email: null,
        number: null,
        pass: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setNumber, setPassword, resetRegisterData } =
  registerSlice.actions;

export default registerSlice.reducer;