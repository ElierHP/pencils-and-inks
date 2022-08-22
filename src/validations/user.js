import * as yup from "yup";

export const userSchema = yup
  .object({
    first_name: yup.string().required("First name required").min(1).max(20),
    last_name: yup.string().required("Last name required").min(1).max(40),
    email: yup.string().email().required().min(6).max(255),
    password: yup.string().required().min(6).max(255),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export const userLoginSchema = yup
  .object({
    email: yup.string().email().required().min(6).max(255),
    password: yup.string().required().min(6).max(255),
  })
  .required();
