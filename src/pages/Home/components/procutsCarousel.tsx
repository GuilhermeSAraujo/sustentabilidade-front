import {
  Box,
  Grid,
  Typography,
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
  console.log('products', products);
  const theme = useTheme();
  const [slidesPerView, setSlidePerView] = useState(2);


  useEffect(() => {
    const handleResize = () => {
      if (products.length >= 3) {
        if (window.innerWidth < 720) {
          setSlidePerView(2);
        } else {
          setSlidePerView(3);
        }
      } else if (products.length === 2) {
        setSlidePerView(2);
      } else {
        setSlidePerView(1);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize) }
  }, []);


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
          autoplay={{ delay: 5000 }}

        >
          {products.length > 0 && products.map((product, i) => (
            <SwiperSlide key={i}>
              <Grid item xs={12} textAlign="center" height='80%'>
                <Box
                  p={1}
                  sx={{
                    display: "flex",
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "15px",
                    boxShadow: "0px 7px 15px 3px rgba(0,0,0,0.25)",
                    height: '100%',
                    width: '80%',
                    margin: { xs: 1, md: 2 },
                  }}
                >
                  <Box marginRight={0.5} sx={{ flex: 1, alignSelf: "center" }}>
                    <Typography variant="body1" fontWeight={600}>{truncateText(product.name, 35)}</Typography>
                    <Typography variant="body1">
                      <span style={{ color: 'red', fontWeight: 'bold' }}>{product.days_until_expiry}</span> dias para expiração
                    </Typography>
                    <Typography variant="body2">
                      {product.expireDate}
                    </Typography>
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
