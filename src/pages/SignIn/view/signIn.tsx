import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../../hooks/useAuth";
import { ISignIn } from "../../../models/user";

const SignIn = () => {
  const history = useNavigate();
  const { login } = useAuth()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor, insira um e-mail válido")
      .required("Email é obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ISignIn>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const submitForm = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await login({ email: data.email, password: data.password });
      setLoading(false);
      history("/home");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  });

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {error && (
        <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setError(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Ocorreu um erro. Tente novamente em alguns minutos.
          </Alert>
        </Box>
      )}
      <Box
        width="85%"
        border="1px solid lightgray"
        borderRadius="2.5%"
        padding={2.5}
        paddingBottom={2.5}
        mb={{ xs: "50%", sm: 0 }}
        sx={{
          borderShadow: "15px 12px 15px -3px rgba(0,0,0,0.1)",
          backgroundColor: "lightgray",
          maxWidth: '500px'
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          LogIn!
        </Typography>
        <form onSubmit={submitForm}>
          <Box
            paddingTop={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap={2}
          >
            <TextField
              label="E-mail"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email")}
              fullWidth
            />
            <TextField
              label="Senha"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...register("password")}
              type="password"
              fullWidth
            />
            <LoadingButton
              disabled={!isValid}
              loading={loading}
              variant="contained"
              type="submit"
              fullWidth
            >
              Entrar
            </LoadingButton>
          </Box>
        </form>
        <Typography variant="body2" mt={2}>
          Não possui uma conta? <Link to="/signup">Clique aqui.</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignIn;
