import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name:'register',
  initialState: {
    formInput:{
        email: null,
        nama:null,
        password: null,
        nim:null,
        prodi:null,
        kelasCode:null,
        telp:null
    },
  },
  reducers: {
   
    setEmail:(state, action) => {
        state.formInput.email = action.payload
    },
    setNama:(state, action) => {
        state.formInput.nama = action.payload
    },
    setPassword:(state, action) => {
        state.formInput.password = action.payload
    },
    
    setUserNim:(state, action) => {
        state.formInput.nim = action.payload
    },
    setUserProdi:(state, action) => {
        state.formInput.prodi = action.payload
    },
    setUserkelasCode:(state, action) => {
        state.formInput.kelasCode = action.payload
    },
    setUserTelp:(state, action) => {
        state.formInput.telp = action.payload
    },
    resetRegisterData:(state) =>{
        state.formInput = {
            email: null,
            nama:null,
            password: null,
            nim:null,
            prodi:null,
            kelasCode:null,
            telp:null
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setEmail,
    setNama,
    setUserNim,
    setPassword,
    resetRegisterData,
    setUserProdi,
    setUserkelasCode,
    setUserTelp
 } = registerSlice.actions

export default registerSlice.reducer