import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button, Input } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { taskAction } from "@redux/Slices/task.slice";

export default function TaskForm() {
  const [task, setTask] = React.useState("");
  const dispatch = useAppDispatch();
  const { addTask } = taskAction;
  const { tasks } = useAppSelector((state) => state.task);
  const handleTask = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTask(e.target.value);
  };
  const submitTask = () => {
    dispatch(
      addTask({
        task,
      })
    );
    setTask("");
  };
  // React.useEffect(() => {}, [task, dispatch]);
  return (
    <div>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        margin="2%"
      >
        <Box width="100%">
          <Input
            onChange={(e) => handleTask(e)}
            placeholder="Add Task"
            value={task}
            fullWidth
          />
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <Button variant="contained" onClick={submitTask}>
            Add task
          </Button>
        </Box>
      </Stack>
    </div>
  );
}
