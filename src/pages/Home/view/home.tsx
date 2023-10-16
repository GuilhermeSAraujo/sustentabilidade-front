import { Box, Grid, Typography } from "@mui/material";
import ExpirationTable from "../components/expirationTable";
import ModalAddProduct from "../components/modalAddProduct";
import ProductsCarousel from "../components/procutsCarousel";

const productsList = [
  {
    i: 1,
    name: "Arroz Tia Jú",
    expirationDate: "01/01/2024",
    image:
      "https://io.convertiez.com.br/m/trimais/shop/products/images/3843/medium/nuggets-de-frango-seara-turma-da-monica-300-g_3803.jpg",
  },
  {
    i: 2,
    name: "Óleo Liza",
    expirationDate: "01/01/2024",
    image:
      "https://debetti.com.br/cdn/shop/files/ketchup-tomato-heinz.jpg?v=1684260840&width=1080",
  },
  {
    i: 3,
    name: "Sabão Limpa Cu",
    expirationDate: "01/01/2024",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
  {
    i: 4,
    name: "Coca-cola Pênis",
    expirationDate: "01/01/2024",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
  {
    i: 5,
    name: "Tesão de vaca",
    expirationDate: "01/01/2024",
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  },
];
const Home = () => {
  return (
    <Box sx={{ maxWidth: '800px', display: 'flex', margin: 'auto' }}>
      <Grid container justifyContent="space-evenly" >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6" fontWeight={600} mt={1}>
            Produtos próximos do vencimento
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <ProductsCarousel products={productsList} />
        </Grid>
        <Grid item xs={12} mt={8}>
          <ExpirationTable />
        </Grid>
        <Grid item xs={12} textAlign="center" marginTop={{ xs: "25%", md: "5%" }}>
          <ModalAddProduct />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;