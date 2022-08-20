import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import docReducer from "./docSlice";
import selectionReducer from "./selectionSlice";
import toastReducer from "./toastSlice";

const allReducers = combineReducers({
  userStatus: authReducer,
  selectedElements: selectionReducer,
  docStatus: docReducer,
});
export default allReducers;
