import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from 'react-redux';
// const user = useSelector()
interface props {
  ownerId: string;
  editMode: boolean;
}

const initialState: props = {
  ownerId: "151515",
  editMode: false,
};

const docSlice = createSlice({
  name: "documentStatus",
  initialState,
  reducers: {
    changeEditMode: (state) => {
      state.editMode = !state.editMode;
    },
  },
});

export const { changeEditMode } = docSlice.actions;
const docReducer = docSlice.reducer;
export default docReducer;
