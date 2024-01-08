import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button, Input } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { taskAction } from "@redux/Slices/task.slice";
import { dragAction } from "@redux/Slices/drag.slice";
import { InputId } from "@constant/TestIds";

export default function TaskForm({ Id }: { Id?: string }) {
  const { tasks } = useAppSelector((state) => state.task);
  const [task, setTask] = React.useState<string>(Id ? tasks[Id].task : "");
  const [description, setDescription] = React.useState<string>(
    Id ? tasks[Id].description : ""
  );
  const dispatch = useAppDispatch();
  const { addTask, modifyTask } = taskAction;
  const { modifyState } = dragAction;

  const submitTask = () => {
    if (Id) {
      dispatch(
        modifyTask({
          id: Id,
          task,
          description,
        })
      );
      dispatch(modifyState({ isModify: false }));
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
            placeholder={Id ? "Modify Task" : "Add Task"}
            value={task}
            fullWidth
            required
            error={task.length > 0 ? false : true}
            data-testid={InputId.TASK}
          />
        </Box>
        <Box width="100%">
          <Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder={Id ? "Modify Description" : "Add Description"}
            value={description}
            fullWidth
            required
            error={description && description.length > 0 ? false : true}
            data-testid={InputId.DESCRIPTION}
          />
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <Box margin="2%">
            <Button variant="contained" onClick={submitTask}>
              {Id ? "Modify" : "Add"}
            </Button>
          </Box>
          {Id && (
            <Box margin="2%">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(modifyState({ isModify: false }))}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>
      </Stack>
    </div>
  );
}
