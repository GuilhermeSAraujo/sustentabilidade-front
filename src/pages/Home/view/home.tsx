import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { UsersProduct } from "../../../models/product";
import ProductService from "../../../shared/api/productService";
import ExpirationTable from "../components/expirationTable";
import ModalAddProduct from "../components/modalAddProduct";
import ProductsCarousel from "../components/procutsCarousel";

/*
const productsList = [
  {
    i: 1,
    name: "Noget Seara",
    expirationDate: "01/01/2024",
    image:
      "https://io.convertiez.com.br/m/trimais/shop/products/images/3843/medium/nuggets-de-frango-seara-turma-da-monica-300-g_3803.jpg",
  },
  {
    i: 2,
    name: "Ketchup Heiz",
    expirationDate: "01/01/2024",
    image:
      "https://debetti.com.br/cdn/shop/files/ketchup-tomato-heinz.jpg?v=1684260840&width=1080",
  },
  {
    i: 3,
    name: "Isabela com Ovos",
    expirationDate: "01/01/2024",
    image: "https://isabela.com.br/wp-content/uploads/2020/12/macarrao.png",
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
*/
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data: productsList, isLoading } = useProducts();


  const produtsToCarousel = () : UsersProduct[]  => {
    if(productsList){
      return ProductService.concatProducts(productsList);
    }
    return [];
  }


  return (
    <Box sx={{ maxWidth: "800px", display: "flex", margin: "auto" }}>
      <Grid container justifyContent="space-evenly">
        {productsList && !isLoading &&
          (
            <>
              <Grid item xs={12} textAlign="center">
                <Typography variant="h6" fontWeight={600} mt={1}>
                  Produtos próximos do vencimento
                </Typography>
              </Grid>
              <Grid item xs={12} mt={1}>
                <ProductsCarousel products={produtsToCarousel()} />
              </Grid>
              <Grid item xs={12} mt={8}>
                <ExpirationTable products={productsList} />
              </Grid>
              <Grid
                item
                xs={12}
                textAlign="center"
                marginTop={{ xs: "25%", md: "5%" }}
              >
                <ModalAddProduct modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <Button variant="contained" onClick={() => setModalOpen(true)}>
                  Adicionar mais produtos
                </Button>
              </Grid>
            </>
          )}

      </Grid>
    </Box>
  );
};

export default Home;
