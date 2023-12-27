import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import DragList from "@components/DragList";

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
        <Typography margin="2px" variant="h4">
          World
        </Typography>
      </Box>
      <Box
        width="75%"
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
        >
          <Box >
            <DragList />
          </Box>
          <Box bgcolor="secondary.main">
            <Box margin="2%">
              <Typography variant="h4">Hello</Typography>
              <Typography variant="h4">Hello</Typography>
              <Typography variant="h4">Hello</Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
