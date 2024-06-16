import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducer/registerReducer'
import authReducer from './reducer/authReducer'
import usersReducer from './reducer/usersReducer'
import settingReducer from './reducer/settingReducer'

export default configureStore({
  reducer: {
    register: registerReducer,
    auth: authReducer,
    users: usersReducer,
    setting: settingReducer   

  },
})
