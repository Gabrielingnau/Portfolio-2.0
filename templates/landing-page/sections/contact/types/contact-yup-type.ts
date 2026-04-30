import * as yup from "yup";

export const formSchemaContact = () =>
  yup.object({
    name: yup
      .string()
      .max(60, "Máximo de 60 caracteres")
      .required("Informe o seu nome"),
    email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
    message: yup.string().required("Escreva uma mensagem"),
  });

export type FormSchemaContact = yup.InferType<
  ReturnType<typeof formSchemaContact>
>;