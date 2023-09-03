import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import ProductsCarousel from "../components/procutsCarousel";

const productsList = [
  {
    i: 1,
    name: "Arroz Tia Jú",
    expirationDate: "30/08/2023",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
  {
    i: 2,
    name: "Fejião Tio João",
    expirationDate: "30/08/2023",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
  {
    i: 3,
    name: "Sabão Limpa Cu",
    expirationDate: "30/08/2023",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
  {
    i: 4,
    name: "Coca-cola Pênis",
    expirationDate: "30/08/2023",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
  {
    i: 5,
    name: "Tesão de vaca",
    expirationDate: "30/08/2023",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
];
const Home = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="space-evenly">
      <Grid item xs={12} textAlign="center">
        <Typography variant="h6" fontWeight={600} mt={1}>
          Produtos próximos do vencimento
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" width="100%" mt={1}>
          <ProductsCarousel products={productsList} />
          {/* <Carousel >
          {productsList &&
            productsList.map((product, i) => (
              <Grid item key={i} p={0.5} xs={5.5} md={3} >
                <Box
                  p={1}
                  sx={{
                    display: "flex",
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "15px",
                  }}
                >
                  <Box marginRight={0.5} sx={{ flex: 1, alignSelf: "center" }}>
                    <Typography variant="body2">{product.name}</Typography>
                    <Typography variant="body1">
                      {product.expirationDate}
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    src={product.image}
                    sx={{
                      flex: 1,
                      maxWidth: "40%",
                      float: "right",
                      borderRadius: "15px",
                    }}
                  />
                </Box>
              </Grid>
            ))}
        </Carousel> */}
        </Box>
      </Grid>
      <Grid item xs={12} textAlign="center" marginTop="100%">
        <Button variant="contained">Adicionar mais produtos</Button>
      </Grid>
    </Grid>
  );
};

export default Home;
