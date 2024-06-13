import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
      id:null,
      firstName: null,
      email: null,
      password: null,
  },
  reducers: {
    setId:(state, action) => {
        state.id = action.payload
    },
    setFirstName: (state, action) => {
      state.formInput.firstName = action.payload;
    },
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    clerAuth:(state) => {
        state.id = null
        state.firstName = null
        state.email= null
        state.password = null
    }

  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setEmail, setPassword, clerAuth } =
 authSlice.actions;

export default authSlice.reducer;
