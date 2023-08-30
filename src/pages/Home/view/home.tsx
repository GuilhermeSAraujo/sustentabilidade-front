import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

const productsList = [
  {name: "Arroz Tia Jú", expirationDate: "30/08/2023", image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg"},
  {name: "Arroz Tia Jú", expirationDate: "30/08/2023", image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg"},
];
const Home = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent='space-evenly'>
      <Grid item xs={12} textAlign='left' sx={{backgroundColor: 'lightgrey'}}>
        <Typography variant='h5'>Produtos mais<br />próximos do vencimento</Typography>
      </Grid>
      {productsList && productsList.map((product) => (
        <Grid p={0.5} item xs={5.5} md={3} >
          <Box p={1} sx={{display: 'flex', backgroundColor: theme.palette.background.paper, borderRadius:'15px'}}>
            <Box marginRight={0.5} sx={{ flex: 1, alignSelf: 'center'}}>
              <Typography variant='body2'>{product.name}</Typography>
              <Typography variant='body1'>{product.expirationDate}</Typography>
            </Box>
              <Box component='img' src={product.image} sx={{ flex: 1, maxWidth: '40%', float: 'right', borderRadius: '15px'}} />
          </Box>
        </Grid>
      ))}
      <Grid item xs={12} textAlign='center' marginTop='100%'>
        <Button variant='contained'>Adicionar mais produtos</Button>
      </Grid>
    </Grid>
  );
};

export default Home;
