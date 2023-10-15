import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useState } from "react";

interface ProductsCarouselProps {
  products: {
    name: string;
    expirationDate: string;
    image: string;
  }[];
}

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [page, setPage] = useState(1);

  // Calculate the start and end indices for slicing the products array
  const productsPerPage = isMobile ? 2 : 3;
  const startIdx = (page - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;

  const slicedProducts = products.slice(startIdx, endIdx);

  const handlePageChange = (newPage: number) => {
    if (
      newPage >= 1 &&
      newPage <= Math.ceil(products.length / productsPerPage)
    ) {
      setPage(newPage);
    }
  };


  return (
    <Grid container sx={{ justifyContent: "space-evenly" }}>
      <Box
        display="flex"
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        {slicedProducts.map((product, i) => (
          <Grid item key={i} p={0.5} xs={5.5} md={3}>
            <Box
              p={1}
              sx={{
                display: "flex",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "15px",
                boxShadow: "0px 7px 15px 3px rgba(0,0,0,0.25)",
                height: '100%'
              }}
            >
              <Box marginRight={0.5} sx={{ flex: 1, alignSelf: "center" }}>
                <Typography variant="body2">{product.name}</Typography>
                <Typography variant="body2">
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
      </Box>
      {Math.ceil(products.length / 2) > 1 && (
        <Box display="flex" pt={1}>
          <Stack direction="row">
            <ArrowBackIosIcon
              onClick={() => handlePageChange(page - 1)}
              color={
                page - 1 >= 1 &&
                page - 1 <= Math.ceil(products.length / productsPerPage)
                  ? "primary"
                  : "disabled"
              }
              fontSize="small"
            />
            <ArrowForwardIosIcon
              onClick={() => handlePageChange(page + 1)}
              color={
                page + 1 >= 1 &&
                page + 1 <= Math.ceil(products.length / productsPerPage)
                  ? "primary"
                  : "disabled"
              }
              fontSize="small"
            />
          </Stack>
        </Box>
      )}
    </Grid>
  );
};

export default ProductsCarousel;
