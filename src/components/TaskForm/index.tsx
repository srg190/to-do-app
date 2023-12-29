import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button, Input } from "@mui/material";
import { useAppDispatch } from "@redux/store";
import { taskAction } from "@redux/Slices/task.slice";

export default function TaskForm({ Id }: { Id?: string }) {
  const [task, setTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useAppDispatch();
  const { addTask, modifyTask } = taskAction;

  const submitTask = () => {
    if (Id) {
      dispatch(
        modifyTask({
          Id,
          task,
          description,
        })
      );
      setTask("");
      setDescription("");
    } else {
      if (description && task) {
        dispatch(
          addTask({
            task,
            description,
          })
        );
        setTask("");
        setDescription("");
      }
    }
  };

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
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add Task"
            value={task}
            fullWidth
            required
            error={task.length > 0 ? false : true}
          />
        </Box>
        <Box width="100%">
          <Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description"
            value={description}
            fullWidth
            required
            error={description.length > 0 ? false : true}
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
