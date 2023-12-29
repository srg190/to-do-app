import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeModeReducer from "@redux/Slices/theme.slice";
import taskReducer from "@redux/Slices/task.slice";
import dragReducer from "@redux/Slices/drag.slice";

export const store = configureStore({
  reducer: {
    theme: themeModeReducer,
    task: taskReducer,
    drag: dragReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
