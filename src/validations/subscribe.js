import * as yup from "yup";

export const subscribeSchema = yup
  .object({
    email: yup.string().email().required().min(5).max(100),
  })
  .required();
