import * as yup from "yup";

export const commentSchema = yup
  .object({
    title: yup.string().required().min(4).max(255),
    comment: yup.string().required().min(10).max(255),
  })
  .required();
