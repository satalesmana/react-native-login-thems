import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
      firstname: null,
      surename: null,
      id:null,
      email: null,
      number: null,
      pass: null,
      nim:null,
      jurusan:null,
      kode:null
    
  },
  reducers: {
    setFirstname: (state, action) => {
      state.firstname= action.payload;
    },
    setSurename: (state, action) => {
      state.surename= action.payload;
    },
    setNim: (state, action) => {
      state.nim= action.payload;
    },
    setJurusan: (state, action) => {
      state.jurusan= action.payload;
    },
    setKode: (state, action) => {
      state.kode= action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setNumber: (state, action) => {
        state.number = action.payload;
      },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clerAuth:(state) => {
      state.firstname = null
      state.surename = null
      state.id = null
      state.nim=null
      state.jurusan=null
      state.kode=null
      state.email=null
      state.password=null
      state.number=null

  }
  },
});

// Action creators are generated for each case reducer function
export const {
  setFirstname,
  setSurename,
  setId,
  setNim,
  setJurusan,
  setKode,
  setEmail,
  setNumber,
  setPassword,
  clerAuth
} = authSlice.actions;

export default authSlice.reducer;