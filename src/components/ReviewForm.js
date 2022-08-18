import { useContext } from "react";
import { FormButton, RatingInput } from "./ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { formatErrorMessage } from "../utils/formatText";
import { commentSchema } from "../validations/comment";
import { User } from "../context/UserProvider";
import { createReview } from "../utils/api/reviews";

export default function ReviewForm({ setIsCommenting, product_id, refetch }) {
  const [user] = useContext(User);

  // Get Request
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = async (data) => {
    await createReview({
      ...data,
      product_id: product_id,
      user_id: user.id,
    });
    await refetch();
    setIsCommenting(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Rating Input */}
      <Wrapper>
        <QuestionContainer>
          <Question>What would you rate this item?</Question>
          {/* Recommended Error Message */}
          {errors.rating && (
            <ErrorMsg>{formatErrorMessage(errors.rating)}</ErrorMsg>
          )}
        </QuestionContainer>
        <RatingInput register={register} />
      </Wrapper>

      {/* Recommended Input */}
      <Wrapper>
        <QuestionContainer>
          <Question>Would you recommend this item?</Question>
          {/* Recommended Error Message */}
          {errors.recommended && (
            <ErrorMsg>{formatErrorMessage(errors.recommended)}</ErrorMsg>
          )}
        </QuestionContainer>

        {/* Input */}
        <Recommended>
          <RecWrapper>
            <label htmlFor="rec-yes">Yes</label>
            <RecInput
              type="radio"
              id="rec-yes"
              value={true}
              {...register("recommended")}
            />
          </RecWrapper>
          <RecWrapper>
            <label htmlFor="res-no">No</label>
            <RecInput
              type="radio"
              id="rec-no"
              value={false}
              {...register("recommended")}
            />
          </RecWrapper>
        </Recommended>
      </Wrapper>
      {/* Title Input */}
      <InputContainer>
        <Input type="text" placeholder="Title" {...register("title")} />

        {/* Title Error Message */}
        {errors.title && (
          <ErrorMsg>{formatErrorMessage(errors.title)}</ErrorMsg>
        )}
      </InputContainer>
      {/* Comment Input */}
      <TextAreaContainer>
        <TextArea
          type="text"
          placeholder="Write comment..."
          {...register("comment")}
        />
        {/* Comment Error Msg */}
        {errors.comment && (
          <ErrorMsg>{formatErrorMessage(errors.comment)}</ErrorMsg>
        )}
      </TextAreaContainer>
      {/* Submit Button */}
      <BtnContainer>
        <FormButton
          type="submit"
          text="Submit"
          color={theme.colors.secondary}
        />
        <CancelButton onClick={() => setIsCommenting(false)}>
          Cancel
        </CancelButton>
      </BtnContainer>
    </Form>
  );
}

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  display: block;
  ${theme.mq()[0]} {
    display: flex;
  }
`;

const QuestionContainer = styled.div`
  position: relative;
`;

const Question = styled.p`
  margin-bottom: 0.5rem;
`;

const Recommended = styled.div`
  display: flex;
  gap: 1rem;
`;

const RecWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RecInput = styled.input`
  cursor: pointer;
  margin-top: 0.1rem;
`;

const InputContainer = styled.div`
  position: relative;
  height: 50px;
`;

const Input = styled.input`
  padding: 0 1rem;
  width: 100%;
  min-height: 100%;
`;

const TextAreaContainer = styled.div`
  position: relative;
`;
const TextArea = styled.textarea`
  display: block;
  padding: 1rem;
  width: 100%;
  height: 150px;
`;

const ErrorMsg = styled.p`
  position: absolute;
  top: -2.5rem;
  color: ${theme.colors.error};
`;

const BtnContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${theme.mq()[0]} {
    flex-direction: row;
  }
`;

const CancelButton = styled.button`
  border: 2px solid ${theme.colors.neutral};
  padding: 1rem 5rem;

  &:hover {
    border: 2px solid ${theme.colors.neutral};
    background: ${theme.colors.neutral};
    color: ${theme.colors.light};
  }

  &:focus {
    border: 2px solid ${theme.colors.neutral};
  }
`;
