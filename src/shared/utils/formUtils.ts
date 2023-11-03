import * as Yup from "yup";

const signUpFormSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
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

const addProductFormSchema = Yup.object().shape({
  productName: Yup.string().required("Campo obrigatório"),
  expirationDate: Yup.string()
    .matches(
      /^(\d{2})\/(\d{2})\/(\d{4})$/,
      "Data de validade deve estar no formato dd/mm/yyyy"
    )
    .required("Email é obrigatório"),
  quantity: Yup.number()
    .required("Campo obrigatório")
    .min(1, "Quantidade deve ser no mínimo 1"),
});

const expirationDateMask = (value : string) => {
    console.log('calleddd')
  return value.replace(/^(\d\d?)(\d\d?)?(\d{4})?/, (_, day, month, year) => {
    let result = "";
    if (day) result += day.padStart(2, "0");
    if (month) result += "/" + month.padStart(2, "0");
    if (year) result += "/" + year;
    return result;
  });
};

export { signUpFormSchema, addProductFormSchema, expirationDateMask };
