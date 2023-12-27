import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number;
  task: string;
  status: "pending" | "success" | "todo";
  assignDate: Date;
}

const initialState = {
  task: {
    id: 0,
    task: "",
    status: "todo",
    assignDate: new Date(),
  },
} as Task;

const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    addTask: (state, action) => {
        sta
      state.task[id] = {

      };
    },
    removeTask: (state, action) => {},
    modifyTask: (state, action) => {},
    taskState: (state, action) => {},
  },
});

export const themeAction = themeModeSlice.actions;
export default themeModeSlice.reducer;
