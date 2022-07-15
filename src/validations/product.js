import * as yup from "yup";

export const productSchema = yup
  .object({
    title: yup.string().required().min(10).max(100),
    description: yup.string().required().min(20).max(1000),
    sku: yup.string().required().min(6).max(20),
    images: yup.string().required().min(6).max(500),
    category: yup.string().required().min(3).max(20),
    tags: yup.string().required().max(50),
    price: yup
      .number()
      .required()
      .min(1)
      .test("is-decimal", "invalid decimal", (value) =>
        (value + "").match(/^\d*\.{1}\d*$/)
      ),
  })
  .required();
