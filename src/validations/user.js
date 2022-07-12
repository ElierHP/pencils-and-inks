import * as yup from "yup";

export const userSchema = yup
  .object({
    email: yup.string().email().required().min(6).max(255),
    password: yup.string().required().min(6).max(255),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
