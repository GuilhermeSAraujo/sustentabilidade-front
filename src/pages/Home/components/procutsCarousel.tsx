import {
  Box,
  Grid,
  Typography,
  useTheme
} from "@mui/material";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from 'swiper/element-bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import dayjs from "dayjs";
import { useEffect, useState } from "react";


interface ProductsCarouselProps {
  products: {
    name: string;
    expirationDate: string;
    image: string;
  }[];
}
register();

const ProductsCarousel = ({ products }: ProductsCarouselProps) => {
  const theme = useTheme();
  const [slidesPerView, setSlidePerView] = useState(2);

  const daysToExpire = (expirationDate: string): number => {
    console.log(expirationDate);
    return dayjs(expirationDate).diff(dayjs(), 'day');
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setSlidePerView(2);
      } else {
        setSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize) }
  }, []);

  return (
    <Grid container>
      <Swiper
        slidesPerView={slidesPerView}
        navigation
        autoplay={{ delay: 5000 }}

      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Grid item xs={12} textAlign="center" height='80%'>
              <Box
                p={1}
                sx={{
                  display: "flex",
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "15px",
                  boxShadow: "0px 7px 15px 3px rgba(0,0,0,0.25)",
                  height: '100%',
                  margin: {xs: 1, md: 2},
                }}
              >
                <Box marginRight={0.5} sx={{ flex: 1, alignSelf: "center" }}>
                  <Typography variant="body1" fontWeight={600}>{product.name}</Typography>
                  <Typography variant="body1">
                    <span style={{ color: 'red', fontWeight: 'bold' }}>{daysToExpire(product.expirationDate)}</span> dias para expiração
                  </Typography>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  )
};

export default ProductsCarousel;
