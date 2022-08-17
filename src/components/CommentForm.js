import { FormButton, RatingInput } from "../components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { formatErrorMessage } from "../utils/formatText";
import { commentSchema } from "../validations/comment";

export default function CommentForm({ setIsCommenting }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <RatingTitle>What would you rate this item?</RatingTitle>
        <RatingInput register={register} />
      </Wrapper>
      <Wrapper>
        <p>Would you recommend this item?</p>
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
      <TextArea
        type="text"
        placeholder="Write comment..."
        {...register("comment")}
      />
      {/* Comment Error Msg */}
      {errors.comment && (
        <ErrorMsg>{formatErrorMessage(errors.comment)}</ErrorMsg>
      )}
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
  gap: 2rem;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

const RatingTitle = styled.p`
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
  max-width: 500px;
  display: flex;
  gap: 2rem;
`;

const CancelButton = styled.button`
  border: 2px solid ${theme.colors.neutral};
  padding: 0 3rem;
  &:hover {
    background: ${theme.colors.neutral};
    color: ${theme.colors.light};
  }
`;
