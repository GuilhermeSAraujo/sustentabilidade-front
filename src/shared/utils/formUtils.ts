import * as Yup from "yup";
import { IFSignUp } from "../../models/user";

const signUpFormSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("Por favor, insira um e-mail válido")
    .required("Email é obrigatório"),
  document: Yup.string()
    .required("Campo obrigatório")
    .max(14, "CPF informado é inválido")
    .min(14, "CPF informado é inválido"),
  birthdate: Yup.string()
    .required("Campo obrigatório")
    .max(10, "Data de nascimento informada é inválida")
    .min(10, "Data de nascimento informada é inválida"),
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
      "Data de validade inválida"
    )
    .required("Email é obrigatório"),
  quantity: Yup.number()
    .required("Campo obrigatório")
    .min(1, "Quantidade deve ser no mínimo 1"),
  barcode: Yup.number()
    .required("Campo obrigatório")
});

const expirationDateMask = (value: string) => {
  return value.replace(/^(\d\d?)(\d\d?)?(\d{4})?/, (_, day, month, year) => {
    let result = "";
    if (day) result += day.padStart(2, "0");
    if (month) result += "/" + month.padStart(2, "0");
    if (year) result += "/" + year;
    return result;
  });
};

const cpfMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');

const birthdateMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?$/, '$1');

const sanitizeSignUp = (data: IFSignUp) => {
  data.document = data.document.replace(/\D/g, '');

  data.birthdate = formatDate(data.birthdate);
  
  return data;
}

const formatDate = (date: string) => {
  return date.replace(/^(\d\d)\/(\d\d)\/(\d{4})$/, (_, day, month, year) => {
    return `${year}-${month}-${day}`
  });
};

export { signUpFormSchema, addProductFormSchema, expirationDateMask, cpfMask, birthdateMask, sanitizeSignUp, formatDate };
