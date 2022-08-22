import { useContext, useState } from "react";
import { FormButton, Spinner } from "../../components/ui";
import { userSchema } from "../../validations/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { formatErrorMessage } from "../../utils/formatText";
import { updateUser } from "../../utils/api/users";
import { User } from "../../context/UserProvider";

export default function EditProfileForm({ setIsEditing }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useContext(User);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await updateUser(user.id, data);
      setUser(res.data);
      setIsEditing(false);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!isLoading ? (
        <>
          {isError && (
            <EditErrorMsg>
              Server Error: Email already exists or password is invalid.
            </EditErrorMsg>
          )}

          <NameContainer>
            {/* First Name Input */}
            <InputContainer>
              <Input
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                defaultValue={user.first_name}
                {...register("first_name")}
              />

              {/* First Name Error Message */}
              {errors.first_name && (
                <ErrorMsg>{formatErrorMessage(errors.first_name)}</ErrorMsg>
              )}
            </InputContainer>

            {/* Last Name Input */}
            <InputContainer>
              <Input
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                defaultValue={user.last_name}
                {...register("last_name")}
              />

              {/* Email Error Message */}
              {errors.last_name && (
                <ErrorMsg>{formatErrorMessage(errors.last_name)}</ErrorMsg>
              )}
            </InputContainer>
          </NameContainer>

          {/* Email Input */}
          <InputContainer>
            <Input
              type="email"
              placeholder="Email"
              autoComplete="email"
              defaultValue={user.email}
              {...register("email")}
            />

            {/* Email Error Message */}
            {errors.email && (
              <ErrorMsg>{formatErrorMessage(errors.email)}</ErrorMsg>
            )}
          </InputContainer>
          {/* Password Input */}
          <InputContainer>
            <Input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              {...register("password")}
            />

            {/* Password Error Msg */}
            {errors.password && (
              <ErrorMsg>{formatErrorMessage(errors.password)}</ErrorMsg>
            )}
          </InputContainer>
          {/* Password Confirmation Input */}
          <InputContainer>
            <Input
              type="password"
              placeholder="Password Confirmation"
              autoComplete="current-password"
              {...register("password_confirmation")}
            />

            {/* Password Error Msg */}
            {errors.password_confirmation && (
              <ErrorMsg>
                {formatErrorMessage(errors.password_confirmation)}
              </ErrorMsg>
            )}
          </InputContainer>
          {/* Submit Button */}
          <FormButton type="submit" text="Submit Changes" />
          {/* Links to Register and Password Recovery. */}
          <Links>
            <a onClick={() => setIsEditing(false)}>
              Cancel changes and go back.
            </a>
          </Links>
        </>
      ) : (
        <Spinner />
      )}
    </Form>
  );
}

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 3rem;
  max-width: 500px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 3rem;
  ${theme.mq()[0]} {
    flex-direction: row;
  }
`;

const InputContainer = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`;

const EditErrorMsg = styled.p`
  color: ${theme.colors.error};
`;

const Input = styled.input`
  padding: 0 1rem;
  width: 100%;
  min-height: 100%;
`;

const ErrorMsg = styled.p`
  position: absolute;
  top: -2.5rem;
  color: ${theme.colors.error};
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;
