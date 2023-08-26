import { Grid, Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <Grid container>
      <Grid item xs={12} sx={{backgroundColor: 'lightgrey'}}>
        <Typography variant='h5'>Produtos mais<br />próximos da validade</Typography>
      </Grid>
      <Grid item xs={5.5} marginLeft={0.5}>
        <Card sx={{ display: 'flex', justifyContent: 'space-around', '.MuiCardContent-root': { padding: '10px'} }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', textAlign: 'center', marginLeft: 1 }}>
              <Typography component="div" variant="body2">
                Arroz Tia Jú
              </Typography>
              <Typography component="div" variant="body2">
                Validade: 30/08/2023
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: '60%' }}
            image="https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
