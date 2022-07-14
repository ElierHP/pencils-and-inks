import { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { Container, FormButton, TextInput } from "../components/ui";
import { useRouter } from "next/router";
import { userSchema } from "../validations/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Link from "next/link";
import { createUser } from "../utils/api/users";
import { User } from "../context/UserProvider";
import formatMessage from "../utils/formatMessage";

export default function Register() {
  const [, setUser] = useContext(User);
  const [registerError, setRegisterError] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) =>
    createUser({ ...data, role: "member" }, setUser, setRegisterError, router);

  return (
    <Layout>
      <Section>
        <Container>
          <Title>Register</Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {registerError && (
              <RegisterErrorMsg>
                Account with that email already exists.
              </RegisterErrorMsg>
            )}
            {/* Email Input */}
            <InputContainer>
              <TextInput
                type="email"
                placeholder="Email"
                autoComplete="email"
                register={register("email")}
              />

              {/* Email Error Message */}
              {errors.email && (
                <ErrorMsg>{formatMessage(errors.email)}</ErrorMsg>
              )}
            </InputContainer>

            {/* Password Input */}
            <InputContainer>
              <TextInput
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                register={register("password")}
              />

              {/* Password Error Msg */}
              {errors.password && (
                <ErrorMsg>{formatMessage(errors.password)}</ErrorMsg>
              )}
            </InputContainer>

            {/* Password Confirmation Input */}
            <InputContainer>
              <TextInput
                type="password"
                placeholder="Password Confirmation"
                autoComplete="current-password"
                register={register("password_confirmation")}
              />

              {/* Password Error Msg */}
              {errors.password_confirmation && (
                <ErrorMsg>
                  {formatMessage(errors.password_confirmation)}
                </ErrorMsg>
              )}
            </InputContainer>

            {/* Submit Button */}
            <FormButton type="submit" text="Create Account" />

            {/* Links to Register and Password Recovery. */}
            <Links>
              <Link href="/login">
                <a>Already have an account? Log in.</a>
              </Link>
            </Links>
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

const InputContainer = styled.div`
  position: relative;
  height: 50px;
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
