import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name:'auth',
    initialState: {
        id: null,
        firstname: null,
        email: null,
        password: null,
    },
    reducers: {
        setId:(state, action) => {
            state.id = action.payload
        },
        setFirstname:(state, action) => {
            state.firstname = action.payload
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
            state.email=null
            state.password=null
    
        }
    }
})

export const { 
    setId,
    setFirstname,
    setEmail,
    setPassword,
    clerAuth
 } = authSlice.actions

export default authSlice.reducer