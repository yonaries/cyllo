import { Action, createSlice } from "@reduxjs/toolkit";
import { type } from "os";

interface toast {
  isToastOn: boolean;
  messageType: string;
  message: string;
}

const initialState: toast = {
  isToastOn: false,
  messageType: "",
  message: "",
};

const toastSlice = createSlice({
  name: "toastMessage",
  initialState,
  reducers: {
    toastOn: (state) => {
      state.isToastOn = true;
    },
    toastMessageType: (state, action) => {
      state.messageType = action.payload;
    },
    toastMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { toastOn, toastMessageType, toastMessage } = toastSlice.actions;
const toastReducer = toastSlice.reducer;
export default toastReducer;
// export const toastStatus = initialState.isToast;
