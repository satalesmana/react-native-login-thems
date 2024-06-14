import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    formFilter: {},
    data: []
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data=[]
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, clearData } =
  usersSlice.actions;

export default usersSlice.reducer;
