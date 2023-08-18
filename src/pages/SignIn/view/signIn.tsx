import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { ISignIn } from "../../../models/user";

const SignIn = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
    trigger,
  } = useForm<ISignIn>({
    mode: "onBlur",
    // resolver: yupResolver(schema),
    // defaultValues: dadosPessoais,
  });

  const submitForm = handleSubmit((data) => {
    console.log("guizinnn", data);
  });

  return (
    <Box
      height="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box width="85%" border="1px solid grey" borderRadius='6.5%' padding={2} paddingBottom={2.5}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Cadastre-se!
        </Typography>
        <form onSubmit={submitForm}>
          <Box
            paddingX={1}
            paddingTop={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap={2}
          >
            <TextField
              label="E-mail"
              required
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email")}
              fullWidth
            />
            <TextField
              label="Senha"
              required
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...register("password")}
							type="password"
              fullWidth
            />
           <TextField
              label="Confirme a senha"
              required
              error={Boolean(errors.passwordConfirm)}
              helperText={errors.passwordConfirm?.message}
              {...register("passwordConfirm")}
							type="password"
              fullWidth
            />
            <LoadingButton variant="contained" type='submit' fullWidth>
              Submeter
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
