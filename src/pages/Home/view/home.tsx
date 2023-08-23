import { Box, Typography } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Typography variant='h1'>Olá {user?.name}</Typography>
      <Typography variant='body1'>Teste 1</Typography>
      <Typography variant='body1'>{JSON.stringify(import.meta.env)}</Typography>
    </Box>
  );
};

export default Home;
