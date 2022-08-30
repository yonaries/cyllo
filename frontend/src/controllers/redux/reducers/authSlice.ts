import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorageMiddleware } from "../middleware";

interface user {
  user: string;
  userName: string;
  email: string;
}

interface IUser {
  user: {
    displayName: string,
    email: string,
    emailVerified: boolean,
    picture: string
  }
  isLoggedIn: boolean;
}

const initialState: IUser = {
  user: {
    displayName: "",
    email: "",
    emailVerified: false,
    picture: "",
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    signedIn: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    signedOut: (state) => {
      state = initialState;
      localStorage.setItem("applicationState", "");
    },
  },
});

export const { signedIn, signedOut } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
