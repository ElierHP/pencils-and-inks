import { useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { Container, FormButton, TextInput } from "../components/ui";
import { useRouter } from "next/router";
import { BASE_URL } from "../utils/api";
import { userSchema } from "../validations/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Link from "next/link";

export default function Register() {
  const [registerError, setRegisterError] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const CreateUser = async (data) => {
    try {
      // Send register request to server
      const res = await axios.post(
        `${BASE_URL}/users`,
        { user: data },
        {
          withCredentials: true,
        }
      );

      // Redirect to home page if successful
      if (res.status === 201) router.push("/");
    } catch (error) {
      setRegisterError(true);
    }
  };

  const onSubmit = (data) => CreateUser({ ...data, role: "member" });

  // Error message starts with an uppercase letter and ends with a period.
  // Pass in errors.password or errors.email
  const formatMessage = (errors) =>
    `${errors.message.charAt(0).toUpperCase() + errors.message.slice(1)}.`;

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
