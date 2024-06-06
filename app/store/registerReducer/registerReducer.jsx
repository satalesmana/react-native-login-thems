import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        Email: null,
        Password: null,
        ConfirmPassword: null
    },
}
})
