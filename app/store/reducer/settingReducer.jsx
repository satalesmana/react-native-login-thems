import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    formSetting: {
      email: null,
      password: null,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.formSetting.email = action.payload;
    },
    setPassword: (state, action) => {
      state.formSetting.password = action.payload;
    },
    resetSettingData: (state) => {
      state.formSetting = {
        email: null,
        password: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, resetSettingData } =
  settingSlice.actions;

export default settingSlice.reducer;
