import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../..";

interface user {
  userData: any;
  isLoggedIn: boolean;
}

const initialState: user = {
  userData: "",
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
    },
  },
});

export const { signedIn, signedOut } = authSlice.actions;
export const authStatus = (state: UserState) => state.userStatus;
const authReducer = authSlice.reducer;
export default authReducer;
