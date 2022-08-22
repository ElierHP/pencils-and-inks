import Layout from "../components/layout/Layout";
import { Container, FormButton, Spinner } from "../components/ui";
import { userSchema } from "../validations/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Link from "next/link";
import { formatErrorMessage } from "../utils/formatText";
import useAccount from "../hooks/useAccount";

export default function Register() {
  const [registerUser, registerError, loading] = useAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => registerUser({ ...data, role: "member" });

  return (
    <Layout>
      <Section>
        <Container>
          <Title>Register</Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {registerError.error && (
              <RegisterErrorMsg>{registerError.message}</RegisterErrorMsg>
            )}
            {loading ? (
              <Spinner />
            ) : (
              <>
                <NameContainer>
                  {/* First Name Input */}
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="First Name"
                      autoComplete="given-name"
                      {...register("first_name")}
                    />

                    {/* First Name Error Message */}
                    {errors.first_name && (
                      <ErrorMsg>
                        {formatErrorMessage(errors.first_name)}
                      </ErrorMsg>
                    )}
                  </InputContainer>

                  {/* Last Name Input */}
                  <InputContainer>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      autoComplete="family-name"
                      {...register("last_name")}
                    />

                    {/* Email Error Message */}
                    {errors.last_name && (
                      <ErrorMsg>
                        {formatErrorMessage(errors.last_name)}
                      </ErrorMsg>
                    )}
                  </InputContainer>
                </NameContainer>

                {/* Email Input */}
                <InputContainer>
                  <Input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
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
                <FormButton text="Create Account" />
                {/* Links to Register and Password Recovery. */}
                <Links>
                  <Link href="/login">
                    <a>Already have an account? Log in.</a>
                  </Link>
                </Links>
              </>
            )}
          </Form>
        </Container>
      </Section>
    </Layout>
  );
}

// Styles
const Section = styled.div`
  padding: 5rem 0;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 0;
`;

const RegisterErrorMsg = styled.p`
  color: ${theme.colors.error};
`;

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
    justify-content: center;
    flex-direction: row;
  }
`;

const InputContainer = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
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
`;
