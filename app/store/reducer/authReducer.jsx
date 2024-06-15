import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name:'auth',
    initialState: {
      firstname : null,
      surename : null,
      email: null,
      number: null,
      pass: null,
      nim:null,
      jurusan:null,
      kode:null,
      password:null
    },
    reducers: {
        setId:(state, action) => {
            state.id = action.payload
        },
        setFirstname:(state, action) => {
            state.firstname = action.payload
        },
        setSurename:(state,action)=>{
          state.surename =action.payload
        },
        setNim:(state,action)=>{
          state.nim =action.payload
        },
        setEmail:(state,action)=>{
          state.email =action.payload
        },
        setJurusan:(state,action)=>{
          state.jurusan =action.payload
        },
        setKode:(state,action)=>{
          state.kode =action.payload
        },
        setNumber:(state,action)=>{
          state.kode =action.payload
        },
        setEmail:(state, action) => {
            state.email = action.payload
        },
        setPassword:(state, action) => {
            state.password = action.payload
        },
        clerAuth:(state) => {
            state.id = null
            state.firstname = null
            state.surename=null
            state.nim=null
            state.jurusan=null
            state.kode=null
            state.number=null
            state.email=null
            state.password=null
    
        }
    }
})

export const { 
    setId,
    setFirstname,
    setSurename,
    setNim,
    setJurusan,
    setNumber,
    setKode,
    setEmail,
    setPassword,
    clerAuth
 } = authSlice.actions

export default authSlice.reducer