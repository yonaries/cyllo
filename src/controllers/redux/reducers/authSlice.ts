import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorageMiddleware } from "../middleware";

interface user {
  userData: string;
  userName: string;
  email: string;
  isLoggedIn: boolean;
}

const initialState: user = {
  userData: "",
  userName: "",
  email: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    signedIn: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    signedOut: (state) => {
      state.isLoggedIn = false;
      state.userData = "";
      saveToLocalStorageMiddleware("");
    },
  },
});

export const { signedIn, signedOut } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
