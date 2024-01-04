import { createSlice } from "@reduxjs/toolkit";
import {
  getDataFromLocalStorage,
  setDataInLocalStorage,
  uid,
} from "@utility/index";

interface Tasks {
  tasks: {
    [id: string]: {
      task: string;
      description: string;
      status: "pending" | "success" | "todo" | "process";
      assignDate?: Date;
      modifydate?: Date;
    };
  };
}

const initialState: Tasks = {
  tasks: { ...getDataFromLocalStorage("tasks") },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task, description } = action.payload;
      const id = uid();
      state.tasks[id] = {
        task,
        description,
        status: "todo",
        assignDate: new Date(),
        modifydate: new Date(),
      };
      setDataInLocalStorage("tasks", state.tasks);
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      delete state.tasks[id];
      setDataInLocalStorage("tasks", state.tasks);
    },
    modifyTask: (state, action) => {
      const { id, task, status, description } = action.payload;
      console.log(state.tasks[id]);
      state.tasks[id] = {
        task: task || state.tasks[id].task,
        description: description || state.tasks[id].description,
        status: status || state.tasks[id].status,
        modifydate: new Date(),
        assignDate: state.tasks[id].assignDate,
      };
      setDataInLocalStorage("tasks", state.tasks);
    },
  },
});

export const taskAction = taskSlice.actions;
export default taskSlice.reducer;
