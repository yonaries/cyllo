import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import selectionReducer from "./selectionSlice";
import toastReducer from "./toastSlice";

const allReducers = combineReducers({
  userStatus: authReducer,
  selectedElements: selectionReducer,
});
export default allReducers;
