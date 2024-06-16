import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    nim : null,
    prodi : null,
    classCode : null,
    noTelp : null,
    email: null,
    password: null,
  },
  reducers: {
  setId: (state, action) => {
    state.id = action.payload;
  },
  setFirstName: (state, action) => {
    state.firstName = action.payload;
  },
  setLastName: (state, action) => {
    state.lastName = action.payload;
  },
  setNim: (state, action) => {
    state.nim = action.payload;
  },
  setProdi: (state, action) => {
    state.prodi = action.payload;
  },
  setClassCode: (state, action) => {
    state.classCode = action.payload;
  },
  setNoTlp: (state, action) => {
    state.noTelp = action.payload;
  },
  setEmail: (state, action) => {
    state.email = action.payload;
  },
  setPassword: (state, action) => {
    state.password = action.payload;
  },
  clerAuth: (state) => {
    state.id = null
    state.firstName = null
    state.lastName = null
    state.nim = null
    state.prodi = null
    state.classCode = null
    state.noTelp = null
    state.email = null
    state.email = null
  }
}
})

export const {
  setId,
  setFirstName,
  setLastName,
  setNim,
  setProdi,
  setClassCode,
  setNoTlp,
  setEmail,
  setPassword,
  clerAuth
} = authSlice.actions;

export default authSlice.reducer;