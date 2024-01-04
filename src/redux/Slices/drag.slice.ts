import { createSlice } from "@reduxjs/toolkit";

interface Drag {
  isDragging: boolean;
  Id?: string;
  isRemove?: boolean;
  isModify?: boolean;
}

const initialState: Drag = {
  isDragging: false,
  Id: "",
  isRemove: false,
  isModify: false,
};

const dragSlice = createSlice({
  name: "drag",
  initialState,
  reducers: {
    dragState: (state, action) => {
      const { Id, isDragging } = action.payload;
      state.isDragging = isDragging;
      state.Id = Id || state.Id;
    },
    removeState: (state, action) => {
      const { isRemove } = action.payload;
      state.isRemove = isRemove;
    },
    modifyState: (state, action) => {
      const { isModify } = action.payload;
      state.isModify = isModify;
    },
  },
});

export const dragAction = dragSlice.actions;
export default dragSlice.reducer;
