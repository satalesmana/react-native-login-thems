import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    firstName: null,
    nim: null,
    number: null,
    jurusan: null,
    kode: null,
    email: null,
    password: null,
  },
  reducers: {
  setId: (state, action) => {
    state.id = action.payload;
  },
  setNim: (state, action) => {
    state.nim = action.payload;
  },
  setJurusan: (state, action) => {
    state.jurusan = action.payload;
  },
  setKode: (state, action) => {
    state.kode = action.payload;
  },
  setNumber: (state, action) => {
    state.number = action.payload;
  },
  setFirstName: (state, action) => {
    state.firstName = action.payload;
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
    state.email = null
    state.nim = null
    state.kode = null
    state.jurusan = null
    state.number = null
    state.password = null
  }
}
})

export const {
  setId,
  setNim,
  setJurusan,
  setKode,
  setNumber,
  setFirstName,
  setEmail,
  setPassword,
  clerAuth
} = authSlice.actions;

export default authSlice.reducer;