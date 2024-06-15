import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        firstName: null,
        sureName: null,
        email: null,
        nim:null,
        jurusan:null,
        kode:null,
        num:null,
        password: null

    }
  },
  reducers: {
    setFirstName:(state, action) => {
        state.formInput.firstName = action.payload
    },
    setSureName:(state, action) => {
        state.formInput.sureName = action.payload
    },
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setNim:(state, action) => {
        state.formInput.nim = action.payload
    },
    setKode:(state, action) => {
        state.formInput.kode = action.payload
    },
    setJurusan:(state, action) => {
        state.formInput.jurusan = action.payload
    },
    setNum:(state, action) => {
        state.formInput.num = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            firstName: null,
            sureName: null,
            email: null,
            nim: null,
            kode: null,
            jurusan: null,
            num: null,
            password: null
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setFirstName,
    setSureName,
    setEmail,
    setNim,
    setKode,
    setJurusan,
    setNum,
    setPassword,
    resetRegisterData
 } = registerSlice.actions;

export default registerSlice.reducer;