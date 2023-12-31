import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import ProductService from "../../../shared/api/productService";
import ExpirationTable from "../components/expirationTable";
import ModalAddProduct from "../components/modalAddProduct";
import ProductsCarousel from "../components/procutsCarousel";
import EcoImage from '../../../shared/assets/images/ecoImage.svg';
import EcoImage2 from '../../../shared/assets/images/ecoImage2.svg';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { data: productsList, isLoading } = useProducts();


  return (
    <Box sx={{ maxHeight: '100%' }}>
      <Box sx={{ maxWidth: "800px", display: "flex", margin: "auto" }}>
        <Grid container justifyContent="space-evenly">
          {productsList && !isLoading &&
            (
              <>
                <Grid item xs={12} textAlign="center" pt={1}>
                  <Typography variant="h6" fontWeight={600} mt={1}>
                    Produtos próximos do vencimento
                  </Typography>
                </Grid>
                <Grid item xs={12} pt={1}>
                  <ProductsCarousel products={ProductService.concatProducts(productsList)} />
                </Grid>
                <Grid item xs={12} sx={{paddingTop:{xs: 0, md: 3}}}>
                  <ExpirationTable products={productsList} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  textAlign="center"
                  paddingTop={{ xs: "10%", md: "13%" }}
                  marginBottom={{ xs: "15%", md: "10%" }}
                  zIndex={2}
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
      <Grid container sx={{
        width: '100vw', position: 'absolute', bottom: 0, left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw'
      }}>
        <Grid item xs={12}
          display='flex'
          sx={{
            width: "100%",
            justifyContent: 'space-between'
          }}
        >
          <Box component='img' src={EcoImage} sx={{ maxWidth: { xs: '150px', md: '250px' } }}  zIndex={1} />
          <Box component='img' src={EcoImage2} sx={{ maxWidth: { xs: '150px', md: '250px' } }} zIndex={1}/>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Home;
