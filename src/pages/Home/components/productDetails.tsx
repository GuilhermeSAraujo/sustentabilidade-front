import { yupResolver } from "@hookform/resolvers/yup";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IFAddProduct } from "../../../models/product";
import {
    addProductFormSchema
} from "../../../shared/utils/formUtils";
const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFAddProduct>({
    mode: "onBlur",
    resolver: yupResolver(addProductFormSchema),
  });

  const submitForm = handleSubmit(async (data) => {
    if(isValid){

        try {
            setIsLoading(true);
            console.log(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }
  });

  return (
    <Box sx={modalStyle}>
      <Grid container>
        <Grid item xs={12} textAlign="left" pb={2}>
          <Typography variant="h5" color="#006400">
            Informações do produto
          </Typography>
        </Grid>
        <form onSubmit={submitForm}>
          <Grid item xs={12} textAlign="center" pb={2}>
            <TextField
              label="Nome do produto"
              variant="outlined"
              defaultValue={"Isabela com 🥚s"}
              error={Boolean(errors.productName)}
              helperText={errors.productName?.message}
              {...register("productName", {
                pattern: /^(\d\d?)(\d\d?)?(\d{4})?/,
              })}
            />
          </Grid>
          <Grid item xs={12} textAlign="center" pb={2}>
            <TextField
              label="Data de validade"
              variant="outlined"
              error={Boolean(errors.expirationDate)}
              helperText={errors.expirationDate?.message}
              {...register("expirationDate")}
            />
          </Grid>
          <Grid item xs={12} textAlign="center" pb={2}>
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
          <Grid item xs={12} textAlign="center">
            {isLoading ? (
              <CircularProgress size="30px" />
            ) : (
              <Button variant="contained" type="submit">
                Adicionar produto
              </Button>
            )}
          </Grid>
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
  width: 250,
  bgcolor: "background.paper",
  p: 2.5,
  borderRadius: "10px",
  boxShadow: "10px 17px 20px 8px rgba(0,0,0,0.25)",
};
