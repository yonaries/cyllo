import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFile: "",
  selectedView: "",
  selectedDoc: "",
};

const selectionSlice = createSlice({
  name: "selectedElements",
  initialState,
  reducers: {
    selectFile: (state, action) => {
      state.selectedFile = action.payload;
      state.selectedView = "";
    },
    selectView: (state, action) => {
      state.selectedView = action.payload;
      state.selectedFile = "";
      state.selectedDoc = "";
    },
    selectDoc: (state, action) => {
      state.selectedDoc = action.payload;
      state.selectedView = "";
    },
    resetSelections: (state) => {
      state.selectedDoc = "";
      state.selectedFile = "";
      state.selectedView = "";
    },
  },
});
export const { selectFile, selectDoc, selectView, resetSelections } =
  selectionSlice.actions;
const selectionReducer = selectionSlice.reducer;
export default selectionReducer;
