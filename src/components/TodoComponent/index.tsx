import Stack from "@mui/system/Stack";
import TaskCard from "@components/TaskCard";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { taskAction } from "@redux/Slices/task.slice";
import { capitalizeFirstLetter } from "@utility/index";

interface Task {
  [id: string]: {
    task: string;
    description: string;
    status: "pending" | "success" | "todo" | "process";
    assignDate?: Date;
    modifydate?: Date;
  };
}
type MyObj = Record<string, Task[]>;

function Todo() {
  const { tasks } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const { modifyTask } = taskAction;

  const data: MyObj = {
    todo: [],
    pending: [],
    process: [],
    success: [],
  };
  Object.keys(tasks).forEach((v) => {
    data[tasks[v].status].push({
      [v]: {
        task: tasks[v].task,
        description: tasks[v].description,
        status: tasks[v].status,
        assignDate: tasks[v].assignDate,
        modifydate: tasks[v].modifydate,
      },
    });
  });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, val: string) => {
    const Id = e.dataTransfer.getData("Id");
    if (tasks[Id].status !== val) {
      dispatch(
        modifyTask({
          id: Id,
          status: val,
        })
      );
    }
    e.preventDefault();
    e.stopPropagation();
  };
  // useEffect(() => {}, [dispatch, handleDrop, modifyTask]);

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
                Object.keys(val).map((dat) => (
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
                ))
              )}
            </Stack>
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default Todo;
