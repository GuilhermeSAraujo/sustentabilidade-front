import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from 'swiper/element-bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UsersProduct } from "../../../models/product";
import { iconGenerator } from "../../../shared/components/IconGenerator";
import { truncateText } from "../../../shared/utils/stringUtils";


interface ProductsCarouselProps {
  products: UsersProduct[];
}
register();

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  const theme = useTheme();
  const [slidesPerView, setSlidePerView] = useState(1);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleResize = () => {
      if (products.length === 1) {
          setSlidePerView(1);
      } else if (products.length >= 3) {
        if (isMobile) {
          setSlidePerView(2);
        } else {
          setSlidePerView(3);
        }
      } else if (products.length === 2) {
          setSlidePerView(2);
      }
    }

    handleResize();

  }, [products, isMobile]);


  return (
    <>
      {products.length === 0 && (
        <Box display='flex' justifyContent='center'>
          <Typography variant='caption'>Cadastre seu primeiro produto agora!</Typography>
        </Box>
      )}
      <Grid container>
        <Swiper
          slidesPerView={slidesPerView}
          navigation
          autoplay={{ delay: 2500 }}

        >
          {products.length > 0 && products.map((product, i) => (
            <SwiperSlide key={i}>
              <Grid item xs={12} sx={{ textAlign: '-webkit-center' }} height='80%'>
                <Box
                  p={1}
                  sx={{
                    py: 2,
                    display: "flex",
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "15px",
                    boxShadow: "0px 7px 15px 3px rgba(0,0,0,0.25)",
                    height: '100%',
                    width: products.length === 1 ? '50%' : '90%',
                    margin: { xs: 1, md: 2 },
                  }}
                >
                  <Box marginRight={0.5} sx={{ flex: 1, alignSelf: "center" }}>
                    <Typography variant={isMobile ? "body2" : "body1"} fontWeight={600} pb={1}>{truncateText(product.name, isMobile ? 20 : 35)}</Typography>

                    {product.days_until_expiry >= 0 && product.days_until_expiry < 1 && (
                      <Typography variant="body1">
                        <span style={{ color: 'red', fontWeight: 'bold' }}>Menos de 1 dia</span> para expiração
                      </Typography>
                    )}

                    {product.days_until_expiry >= 1 && (
                      <Typography variant="body1">
                        <span style={{ color: 'red', fontWeight: 'bold' }}>{product.days_until_expiry} {product.days_until_expiry === 1 ? "dia" : "dias"}</span> para expiração
                      </Typography>
                    )}
                  </Box>
                  {product.image_url?.length > 0 ? (
                    <Box
                      component='img'
                      src={product.image_url}
                      sx={{
                        flex: 1,
                        maxWidth: "30%",
                        float: "right",
                        borderRadius: "15px",
                      }}
                    />
                  ) : (<Box
                    sx={{
                      flex: 1,
                      maxWidth: "40%",
                      float: "right",
                      borderRadius: "15px",
                    }}
                  >
                    {iconGenerator({ fontSize: "large", color: "primary" })}
                  </Box>)}
                </Box>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  )
};

export default ProductsCarousel;
