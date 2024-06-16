import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        email: null,
        nama:null,
        password: null,
        nim:null,
        prodi:null,
        kelasCode:null,
        telp:null
    },
    reducers: {
        setNama:(state, action) => {
            state.nama = action.payload
        },
        setEmail:(state, action) => {
            state.email = action.payload
        },
        setNim:(state, action) => {
            state.nim = action.payload
        },
        setProdi:(state, action) => {
            state.prodi = action.payload
        },
        setkelasCode:(state, action) => {
            state.kelasCode = action.payload
        },
        setTelp:(state, action) => {
            state.telp = action.payload
        },
        clerAuth:(state) => {
            state.nama = null
            state.email = null
            state.nim = null
            state.prodi = null
            state.kelascode = null
            state.telp = null
        }
    }
})

export const {
    setNama,
    setEmail,
    setNim,
    setProdi,
    setkelasCode,
    setTelp,
    clerAuth
 } = authSlice.actions

export default authSlice.reducer
