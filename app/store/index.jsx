import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/registerReducer";
import authreducer from "./reducer/authreducer";
import usersReducer from "./reducer/usersreducer";
import settingsReducer from "./reducer/settingsreducer";
export default configureStore({
  reducer: {
    register: registerReducer,
    auth: authreducer,
    users: usersReducer,
    setting: settingsReducer,
  },
});
