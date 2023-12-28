import { createSlice } from "@reduxjs/toolkit";
import { setDataInLocalStorage, uid } from "@utility/index";

interface Tasks {
  tasks: {
    [id: string]: {
      task: string;
      status: "pending" | "success" | "todo";
      assignDate?: Date;
      modifydate?: Date;
    };
  };
}

const initialState: Tasks = {
  tasks: {
    id: {
      task: "",
      status: "todo",
      assignDate: new Date(),
      modifydate: new Date(),
    },
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task, status } = action.payload;
      const id = uid();
      state.tasks[id] = {
        task,
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
      const { id, task, status } = action.payload;
      state.tasks[id] = {
        task: task || state.tasks[id].task,
        status: status || state.tasks[id].status,
        modifydate: new Date(),
      };
      setDataInLocalStorage("tasks", state.tasks);
    },
  },
});

export const taskAction = taskSlice.actions;
export default taskSlice.reducer;
