import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        id: null,
        firstName: null,
        sureName: null,
        email: null,
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
        clerAuth:(state) => {
            state.id = null
            state.firstName = null
            state.sureName = null
        }
    }
})

export const { 
    setId,
    setFirstName,
    setSureName,
    clerAuth
 } = authSlice.actions

export default authSlice.reducer