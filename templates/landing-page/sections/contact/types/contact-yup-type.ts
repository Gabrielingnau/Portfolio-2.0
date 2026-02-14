import * as yup from "yup";

export const formSchemaContact = () =>
  yup.object({
    name: yup
      .string()
      .max(60, "Você só pode inserir até 60 caracteres")
      .required("Informe o seu nome"),
    email: yup.string().email().required("Informe o email"),
    message: yup.string().required("Escreva uma menssagem"),
  });

export type FormSchemaContact = yup.InferType<
  ReturnType<typeof formSchemaContact>
>;
