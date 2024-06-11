import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: 'create',
  initialState: {
    formInput: {
      email: null,
      number: null,
      pass: null,
    },
  },
  reducers: {
    setemail: (state, action) => {
      state.formInput.email = action.payload;
    },
    seteumber: (state, action) => {
        state.formInput.number = action.payload;
      },
    setepassword: (state, action) => {
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