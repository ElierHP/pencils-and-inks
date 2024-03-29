import Layout from "../components/layout/Layout";
import { Container, FormButton, Spinner } from "../components/ui";
import { userLoginSchema } from "../validations/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Link from "next/link";
import { formatErrorMessage } from "../utils/formatText";
import useAccount from "../hooks/useAccount";

export default function Login() {
  const [login, loginError, loading] = useAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  const onSubmit = (data) => login(data, "login");

  return (
    <Layout>
      <Section>
        <Container>
          <Title>Login</Title>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {loginError.error && (
              <LoginErrorMsg>{loginError.message}</LoginErrorMsg>
            )}
            {loading ? (
              <Spinner />
            ) : (
              <>
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
                {/* Submit Button */}
                <FormButton text="Sign in" />
                {/* Links to Register and Password Recovery. */}
                <Links>
                  <Link href="/register">
                    <a>New customer? Create an account.</a>
                  </Link>
                  <Link href="/">
                    <a>Forgot your password?</a>
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

const LoginErrorMsg = styled.p`
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
