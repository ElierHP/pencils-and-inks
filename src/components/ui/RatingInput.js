import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function RatingInput({ register }) {
  return (
    <RatingContainer>
      <Input type="radio" value="5" id="r5" {...register("rating")} />
      <Label htmlFor="r5">
        <AiFillStar />
      </Label>

      <Input type="radio" value="4" id="r4" {...register("rating")} />
      <Label htmlFor="r4">
        <AiFillStar />
      </Label>

      <Input type="radio" value="3" id="r3" {...register("rating")} />
      <Label htmlFor="r3">
        <AiFillStar />
      </Label>

      <Input type="radio" value="2" id="r2" {...register("rating")} />
      <Label htmlFor="r2">
        <AiFillStar />
      </Label>

      <Input type="radio" value="1" id="r1" {...register("rating")} />
      <Label htmlFor="r1">
        <AiFillStar />
      </Label>
    </RatingContainer>
  );
}

// Styles
const RatingContainer = styled.div`
  display: inline-block;
  * {
    float: right;
  }
`;

const Label = styled.label`
  font-size: 25px;
  color: ${theme.colors.neutralLight};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.secondary};
  }
  &:hover ~ label {
    color: ${theme.colors.secondary};
  }
`;

const Input = styled.input`
  display: none;
  &:checked ~ label {
    color: ${theme.colors.secondary};
  }
`;
