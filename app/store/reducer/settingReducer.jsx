import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
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
    resetSettingData:(state)=>{
        state.formInput={
            email:null,
            password:null,
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setEmail,
  setPassword,
  resetSettingData,
} = settingSlice.actions;

export default settingSlice.reducer;
