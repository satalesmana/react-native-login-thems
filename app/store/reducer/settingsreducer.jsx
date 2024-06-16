import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    formSetting: {
      email: null,
      pass: null,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.formSetting.email = action.payload;
    },
    setPassword: (state, action) => {
      state.formSetting.pass = action.payload;
    },
    resetSettingData: (state) => {
      state.formSetting = {
        email: null,
        pass: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, resetSettingData } = settingSlice.actions;

export default settingSlice.reducer;
