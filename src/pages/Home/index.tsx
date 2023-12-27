import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import DragList from "@components/DragList";
import TaskManager from "@components/Data";

const Home = () => {
  return (
    <Box
      flexWrap="wrap"
      gap="1rem"
      display="flex"
      justifyContent="space-between"
      width="100%"
    >
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
          // justifyContent="space-between"
          // alignItems="flex-start"
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
          // justifyContent="space-between"
          // alignItems="flex-start"
          spacing={2}
          width="100%"
          height="100%"
          flexGrow={1}
        >
          <Box>
            <Box margin="2%">
              <TaskManager />
            </Box>
          </Box>
          <Box>
            <DragList />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
