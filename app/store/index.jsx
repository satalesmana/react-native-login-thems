import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../store/reducer/registerReducer'

export default configureStore({
  reducer: {
    register: registerReducer
  },
})