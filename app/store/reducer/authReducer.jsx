import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        firstName: null,
        email: null,
        password: null,
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
      resetRegisterData: (state) => {
        state.formInput = {
          firstName: null,
          email: null,
          password: null,
        };
      },
})

export const { setFirstName, setEmail, setPassword, resetRegisterData } =
authSlice.actions

export default authSlice.reducer;