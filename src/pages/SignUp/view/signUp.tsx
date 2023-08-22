import { LoadingButton } from "@mui/lab";
import { Alert, Box, IconButton, TextField, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ISignUp } from "../../../models/user";
import * as Yup from "yup";
import { auth } from "../../../firebase/firebase-config";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const SignUp = () => {
  const history = useNavigate(); 
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor, insira um e-mail válido")
      .required("Email é obrigatório"),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Password must be at 3 char long"),
    passwordConfirm: Yup.string()
      .required("Campo obrigatório")
      .oneOf([Yup.ref("password")], "As senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ISignUp>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const submitForm = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.passwordConfirm
      );
      history('/singIn');
      setLoading(false);
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
          boxShadow: "0px 7px 20px 7px rgba(0,0,0,0.4)",
          backgroundColor: `${theme.palette.background.paper}`,
          maxWidth: '500px'
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Cadastre-se!
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
            <TextField
              label="Confirme a senha"
              error={Boolean(errors.passwordConfirm)}
              helperText={errors.passwordConfirm?.message}
              {...register("passwordConfirm")}
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
              Submeter
            </LoadingButton>
          </Box>
        </form>
        <Typography variant="body2" mt={2}>
          Já possui uma conta? <Link to="/signin">Entre aqui.</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
