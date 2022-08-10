import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { FaMailBulk } from "react-icons/fa";
import { Section, Button, CloseIcon, ErrorMessage, FormButton } from "./ui";
import { subscribeSchema } from "../validations/subscribe";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Subscribe() {
  const [showConfirmation, setShowConfirmation] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscribeSchema),
  });

  const onSubmit = () => {
    setShowConfirmation(true);
    reset();
    setTimeout(() => setShowConfirmation(false), 4000);
  };

  return (
    <Section>
      <Wrapper>
        {showConfirmation && (
          <Confirmation>
            <CloseIcon
              desktopDisplay="block"
              handleClick={setShowConfirmation}
            />
            <ConfirmationText>
              <h3>Thank you for signing up!</h3>
              <p>
                We will send a monthly newsletter with all our best offers! You
                can opt out at any point.
              </p>
            </ConfirmationText>
          </Confirmation>
        )}

        <FaMailBulk size={80} color={theme.colors.neutralDark} />
        <Heading>{"Let's Keep In Touch!"}</Heading>
        <p>
          Subscribe to receive special offers, giveaways, and exclusive deals.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EmailInput>
            {errors.email && (
              <Error>
                <ErrorMessage>Not a valid email address.</ErrorMessage>
              </Error>
            )}

            <Input
              type="email"
              placeholder={"Email address..."}
              {...register("email")}
            />
            <Button type="submit">Subscribe</Button>
          </EmailInput>
        </form>
      </Wrapper>
    </Section>
  );
}

// Styles
const Confirmation = styled.div`
  position: absolute;
  bottom: -5rem;
  background: ${theme.colors.neutralLight};
  padding: 3rem;
  border-radius: 3px;
  max-width: 600px;
  margin: auto;
  z-index: 10;
  margin: 0 2rem;
`;

const ConfirmationText = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  ${theme.mq()[1]} {
    padding: 2.5rem 5rem 5rem 5rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  gap: 2rem;
`;

const Heading = styled.h2`
  margin: 0;
`;

const EmailInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40px;
  ${theme.mq()[1]} {
    max-width: 400px;
    flex-direction: row;
    height: "initial";
  }
`;

const Input = styled.input`
  padding: 0 1rem;
  width: 100%;
  min-height: 100%;
`;

const Error = styled.div`
  position: absolute;
  top: -2.3rem;
  left: 0;
`;
