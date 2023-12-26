import { Box, Typography } from "@mui/material";
import Card from "@components/Card";

const Home = () => {
  return (
    <Box
      flexWrap="wrap"
      gap="1rem"
      display="flex"
      justifyContent="space-around"
      marginTop="9%"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default Home;
