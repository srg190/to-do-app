import Stack from "@mui/system/Stack";
import { Box, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@redux/store";
import { capitalizeFirstLetter } from "@utility/index";
import { taskAction } from "@redux/Slices/task.slice";
import TaskCard from "@components/TaskCard";
import { Task } from "@components/Interface";

type MyObj = Record<string, Task[]>;

function Todo({ Data }: { Data?: Task }) {
  const { tasks } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const { modifyTask } = taskAction;

  const data: MyObj = {
    todo: [],
    pending: [],
    process: [],
    success: [],
  };
  const todoData = Data ? Data : tasks;
  Object.keys(todoData).forEach((v) => {
    data[todoData[v].status].push({
      [v]: {
        task: todoData[v].task,
        description: todoData[v].description,
        status: todoData[v].status,
        assignDate: todoData[v].assignDate,
        modifydate: todoData[v].modifydate,
      },
    });
  });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, val: string) => {
    e.preventDefault();
    const Id = e.dataTransfer.getData("Id");
    console.log("Id --> ", Id);
    if (todoData[Id].status !== val) {
      if (Data) {
        Data[Id].status = val as "pending" | "success" | "todo" | "process";
      } else {
        dispatch(
          modifyTask({
            id: Id,
            status: val,
          })
        );
      }
    }
    e.stopPropagation();
  };

  return (
    <Box margin="2%" height="100%">
      <Stack direction="row" spacing={2} flexGrow={1} margin="0.5em">
        {Object.keys(data).map((v, i) => (
          <div
            key={i}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, v)}
          >
            <Stack
              direction="column"
              spacing={2}
              width="100%"
              height="100%"
              flexGrow={1}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h4">{capitalizeFirstLetter(v)}</Typography>
              </Box>
              {data[v].map((val) =>
                Object.keys(val).map((dat) => {
                  return (
                    <TaskCard
                      status={val[dat].status}
                      Id={dat}
                      description={val[dat].description}
                      task={val[dat].task}
                      assignDate={
                        val[dat].assignDate?.toLocaleString()?.split("T")[0]
                      }
                      key={dat}
                      modifyDate={
                        val[dat].modifydate?.toLocaleString()?.split("T")[0]
                      }
                    />
                  );
                })
              )}
            </Stack>
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default Todo;
