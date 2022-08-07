import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const allReducers = combineReducers({
  userStatus: authReducer,
});
export default allReducers;
