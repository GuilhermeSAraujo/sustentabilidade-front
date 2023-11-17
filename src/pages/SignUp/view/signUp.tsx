import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { LoadingButton } from "@mui/lab";
import { Alert, Box, IconButton, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { IFSignUp } from "../../../models/user";
import { birthdateMask, cpfMask, sanitizeSignUp, signUpFormSchema } from "../../../shared/utils/formUtils";



const SignUp = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const history = useNavigate();
  const theme = useTheme();
  const { signUp } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<IFSignUp>({
    mode: "onBlur",
    resolver: yupResolver(signUpFormSchema),
    defaultValues: { document: '', birthdate: '' }
  });

  const submitForm = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const inputs = sanitizeSignUp(data);
      await signUp(inputs);
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
      py={{xs: '10%', sm: '5%', md: '0%'}}
      px='5%'
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
      <Box sx={{ textAlign: 'center', paddingTop: { xs: 2 } }} >
        <NaturePeopleIcon fontSize="large" />
      </Box>
      <Box sx={{ textAlign: 'center' }} pb={2}>
        <Typography variant={isMobile ? "h5" : "h4"} fontWeight={500} sx={{ textAlign: "center" }}>Mudando o mundo, um passo sustentável de cada vez</Typography>
      </Box>
      <Box
        width="85%"
        height='auto'
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
        <Typography variant="h5" sx={{ textAlign: "left" }}>
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
              label="Nome"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              {...register("name")}
              fullWidth
            />
            <Controller
              name="document"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={(e) => onChange(cpfMask(e.target.value))}
                  value={value}
                  label="CPF"
                  fullWidth
                  required
                  error={Boolean(errors.document)}
                  helperText={errors.document?.message}
                />
              )}
            />
            <Controller
              name="birthdate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={(e) => onChange(birthdateMask(e.target.value))}
                  value={value}
                  label="Data de nascimento"
                  fullWidth
                  required
                  error={Boolean(errors.birthdate)}
                  helperText={errors.birthdate?.message}
                />
              )}
            />
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
