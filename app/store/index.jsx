import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducer/registerReducer'
import usersReducer from "./reducer/usersReducer"
import authReducer from "./reducer/authReducer"
import settingsReducer from './reducer/settingsReducer'

export default configureStore({
  reducer: {
    register: registerReducer,
    users: usersReducer,
    auth: authReducer,
    settings: settingsReducer,

  },
})