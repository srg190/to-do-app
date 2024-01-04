import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import TaskForm from "@components/TaskForm";
import Todo from "@components/TodoComponent";
import Popup from "@components/Option";
import AreYouSure from "@components/AreYouSure";
// import DragList from "@components/DragList";
import Modify from "@components/ModifyTask";

const Home = () => {

  return (
    <Box
      flexWrap="wrap"
      gap="1rem"
      display="flex"
      justifyContent="space-between"
      width="100%"
    >
      <Popup />
      <AreYouSure />
      <Modify />
      <Box
        width="15%"
        height="100vh"
        bgcolor="primary.light"
        margin="2%"
        borderRadius="16px"
        display="flex"
        flexWrap="wrap"
        flexGrow={1}
      >
        <Stack
          direction="column"
          spacing={2}
          width="100%"
          height="100%"
          flexGrow={1}
        >
          <Box width="100%" margin="2%">
            <Box display="flex" justifyContent="center">
              <Typography variant="h4">Task</Typography>
            </Box>
          </Box>
          <Box width="100%" margin="2%">
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">Add Task</Typography>
            </Box>
          </Box>
          <Box width="100%" margin="2%">
            <TaskForm />
          </Box>
          <Box width="100%" margin="2%">
            {/* <DragList items={["Task1"]} /> */}
          </Box>
        </Stack>
      </Box>
      <Box
        width="75%"
        height="100%"
        bgcolor="primary.light"
        margin="1%"
        marginTop="2%"
        marginLeft="0"
        borderRadius="16px"
        display="flex"
        flexWrap="wrap"
        flexGrow={1}
      >
        <Stack
          direction="column"
          spacing={2}
          width="100%"
          height="100%"
          flexGrow={1}
        >
          <Todo />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
