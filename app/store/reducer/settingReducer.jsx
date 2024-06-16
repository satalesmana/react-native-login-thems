import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    formInput: {
      email: null,
      password: null,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.formInput.email = action.payload;
    },
    setPassword: (state, action) => {
      state.formInput.password = action.payload;
    },
    resetSettingData: (state) => {
      state.formInput = { 
        email: null,
        password: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
    setFirstName,
    setLastName,
    setNim,
    setProdi,
    setClassCode,
    setNoTlp,
    setEmail,
    setPassword,
    resetSettingData
 } = settingsSlice.actions
export default settingsSlice.reducer;