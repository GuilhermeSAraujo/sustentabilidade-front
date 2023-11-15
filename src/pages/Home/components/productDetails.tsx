import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IFAddProduct, ProductGetResult } from "../../../models/product";
import ProductService from "../../../shared/api/productService";
import { AddProductsSteps } from "../../../shared/enum/addProcutsSteps";
import {
  addProductFormSchema, birthdateMask
} from "../../../shared/utils/formUtils";

interface ProductDetailsProps {
  barcode: string;
  productData: ProductGetResult | null;
  setProductData: (value: ProductGetResult | null) => void;
  setStep: (value: AddProductsSteps) => void;
}

const ProductDetails = ({ barcode, productData, setProductData, setStep }: ProductDetailsProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductData = async () => {
      const product = await ProductService.getProductByBarcode(barcode);
      setProductData(product);
    };

    getProductData();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm<IFAddProduct>({
    mode: "onBlur",
    resolver: yupResolver(addProductFormSchema),
    defaultValues: { expirationDate: '' }
  });

  const submitForm = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await ProductService.postProduct({
        barcode: productData?.barcode,
        name: productData?.name,
        brand: productData?.brand,
        description: productData?.description,
        averagePrice: productData?.averagePrice,
        imageUrl: productData?.imageUrl,
        expirationDate: data.expirationDate,
        quantity: data.quantity,
      });
      reset();
      setProductData(null);
      setStep(AddProductsSteps.SuccessScreen);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Box sx={modalStyle}>
      <Grid container display='flex' justifyContent='center'>
        <Grid item xs={12} textAlign="center" pb={3}>
          <Typography variant="h5" color="#006400">
            Informações do produto
          </Typography>
        </Grid>
        <form onSubmit={submitForm}>
          <Grid item xs={12} pb={3}>
            <TextField
              label="Código de barras"
              variant="outlined"
              value={barcode}
              {...register("barcode")}
            />
          </Grid>
          {!productData ? (
            <Grid item xs={12} textAlign='center' pb={3}>
              <CircularProgress />
            </Grid>) : (
            <>
              <Grid item xs={12} pb={3}>
                <TextField
                  value={productData.name}
                  variant="outlined"
                  error={Boolean(errors.productName)}
                  helperText={errors.productName?.message}
                  {...register("productName", {
                    pattern: /^(\d\d?)(\d\d?)?(\d{4})?/,
                  })}
                />
              </Grid>
              <Grid item xs={12} pb={3}>
                <Controller
                  name="expirationDate"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={(e) => onChange(birthdateMask(e.target.value))}
                      value={value}
                      label="Data de validade"
                      fullWidth
                      required
                      error={Boolean(errors.expirationDate)}
                      helperText={errors.expirationDate?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} pb={3}>
                <TextField
                  label="Quantidade"
                  variant="outlined"
                  type="number"
                  defaultValue={1}
                  error={Boolean(errors.quantity)}
                  helperText={errors.quantity?.message}
                  {...register("quantity")}
                />
              </Grid>
            </>
          )}
          <>
            {isLoading ? (
              <Grid item xs={12} textAlign='center'>

              <CircularProgress size="30px" />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit" disabled={!isValid} >
                  Adicionar produto
                </Button>
              </Grid>
            )}
          </>
        </form>
      </Grid>
    </Box>
  );
};

export default ProductDetails;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  p: 2.5,
  borderRadius: "10px",
  boxShadow: "10px 17px 20px 8px rgba(0,0,0,0.25)",
};
