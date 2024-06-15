import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducer/registerReducer'
import authReducer from "./reducer/authReducer"

export default configureStore({
  reducer: {
    register: registerReducer,
    auth: authReducer
  },
})