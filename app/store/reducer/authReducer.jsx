import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        id: null,
        firstName: null,
        sureName: null,
        email: null,
        nim: null,
        kode: null,
        jurusan: null,
        num: null,
        password: null
    },
    reducers: {
        setId:(state, action) => {
            state.id = action.payload
        },
        setFirstName:(state, action) => {
            state.firstName = action.payload
        },
        setSureName:(state, action) => {
            state.sureName = action.payload
        },
        setNim:(state, action) => {
            state.nim = action.payload
        },
        setKode:(state, action) => {
            state.kode = action.payload
        },
        setJurusan:(state, action) => {
            state.jurusan = action.payload
        },
        setNum:(state, action) => {
            state.num = action.payload
        },
        setPassword:(state, action) => {
            state.password = action.payload
        },
        clearAuth:(state) => {
            state.id = null
            state.firstName = null
            state.sureName = null
            state.nim = null
            state.kode = null
            state.jurusan = null
            state.num = null
            state.password = null
        }
    }
})

export const { 
    setId,
    setFirstName,
    setSureName,
    setNim,
    setKode,
    setJurusan,
    setNum,
    setPassword,
    clearAuth
 } = authSlice.actions;

export default authSlice.reducer;