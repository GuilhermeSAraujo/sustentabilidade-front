import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";

const Home = () => {
  const { logOut } = useAuth();
  return (
    <Box>
      <Button onClick={logOut}>Sair</Button>
      <Typography variant='h1'>Home</Typography>
    </Box>
  );
};

export default Home;
