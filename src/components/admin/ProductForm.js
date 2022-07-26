import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormButton, TextInput } from "../ui";
import { productSchema } from "../../validations/product";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { formatErrorMessage } from "../../utils/formatText";
import { createProduct, editProduct } from "../../utils/api/products";

export default function ProductForm({
  setDisplay,
  refetch,
  product,
  isAdding,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    if (isAdding) {
      await createProduct(data);
    } else {
      await editProduct(product.id, data);
    }

    setDisplay(false);
    refetch();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        {/* Title Input */}
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Title"
            register={register("title")}
            defaultValue={product && product.title}
          />
          {/* Title Error Msg */}
          {errors.title && (
            <ErrorMsg>{formatErrorMessage(errors.title)}</ErrorMsg>
          )}
        </InputContainer>

        {/* SKU Input */}
        <InputContainer>
          <TextInput
            type="text"
            placeholder="SKU"
            register={register("sku")}
            defaultValue={product && product.sku}
          />
          {/* SKU Error Msg */}
          {errors.sku && <ErrorMsg>{formatErrorMessage(errors.sku)}</ErrorMsg>}
        </InputContainer>
      </InputWrapper>

      <InputWrapper>
        {/* Category Input */}
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Category"
            register={register("category")}
            defaultValue={product && product.category}
          />
          {/* SKU Error Msg */}
          {errors.category && (
            <ErrorMsg>{formatErrorMessage(errors.category)}</ErrorMsg>
          )}
        </InputContainer>

        {/* Tags Input */}
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Tags"
            register={register("tags")}
            defaultValue={product && product.tags}
          />
          {/* Tags Error Msg */}
          {errors.tags && (
            <ErrorMsg>{formatErrorMessage(errors.tags)}</ErrorMsg>
          )}
        </InputContainer>
      </InputWrapper>

      <InputWrapper>
        {/* Price Input */}
        <InputContainer>
          <TextInput
            type="number"
            placeholder="Price"
            register={register("price")}
            defaultValue={product && product.price}
            step=".01"
          />
          {/* SKU Error Msg */}
          {errors.price && (
            <ErrorMsg>{formatErrorMessage(errors.price)}</ErrorMsg>
          )}
        </InputContainer>

        {/* Images Input */}
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Images"
            register={register("images")}
            defaultValue={product && product.images}
          />
          {/* SKU Error Msg */}
          {errors.images && (
            <ErrorMsg>{formatErrorMessage(errors.images)}</ErrorMsg>
          )}
        </InputContainer>
      </InputWrapper>
      {/* Description */}
      <TextAreaContainer>
        <TextArea
          placeholder="Description"
          {...register("description")}
          defaultValue={product && product.description}
        />
        {/* Description Error Msg */}
        {errors.description && (
          <ErrorMsg>{formatErrorMessage(errors.description)}</ErrorMsg>
        )}
      </TextAreaContainer>

      {/* Submit */}
      <BtnContainer>
        <FormButton
          type="submit"
          text={isAdding ? "Add Product" : "Edit Product"}
        />
        <Cancel onClick={() => setDisplay(false)}>Cancel</Cancel>
      </BtnContainer>
    </Form>
  );
}

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 0;
  max-width: 700px;
  margin: auto;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  ${theme.mq()[0]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const InputContainer = styled.div`
  position: relative;
  height: 50px;
`;

const TextAreaContainer = styled.div`
  position: relative;
  height: 200px;
`;

const TextArea = styled.textarea`
  position: relative;
  height: 200px;
  width: 100%;
  border-radius: 3px;
  padding: 1rem 1rem;
  border: 2px solid ${theme.colors.neutral};
  resize: none;
  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.btnHover};
  }
`;

const ErrorMsg = styled.p`
  position: absolute;
  top: -2.5rem;
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.small}rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Cancel = styled.div`
  padding: 1rem;
  cursor: pointer;
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  color: ${theme.colors.primary};
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.btnHover};
    border: 2px solid ${theme.colors.btnHover};
  }
`;
