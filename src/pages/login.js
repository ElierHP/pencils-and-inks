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

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const LoginUser = async (data) => {
    // Send login request to server
    const res = await axios.post(`${BASE_URL}/login`, data, {
      withCredentials: true,
    });

    // Redirect to home page if successful
    if (res.status === 200) {
      router.push("/");
    }
  };

  const onSubmit = (data) => LoginUser(data);

  // Error message starts with an uppercase letter and ends with a period.
  // Pass in errors.password or errors.email
  const formatMessage = (errors) =>
    `${errors.message.charAt(0).toUpperCase() + errors.message.slice(1)}.`;

  return (
    <Layout>
      <Section>
        <Container>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              {/* Password Input */}
            </InputContainer>
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

            {/* Submit Button */}
            <FormButton type="submit" text={"Log in"} />

            {/* Links to Register and Password Recovery. */}
            <Links>
              <Link href="/register">
                <a>New customer? Create an account.</a>
              </Link>
              <Link href="/">
                <a>Forgot your password?</a>
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
