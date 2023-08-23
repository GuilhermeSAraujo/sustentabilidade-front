import { Box, Typography } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Typography variant='h1'>Olá {user?.name}</Typography>
    </Box>
  );
};

export default Home;
