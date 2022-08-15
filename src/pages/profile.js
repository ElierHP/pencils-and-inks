import { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button, Container } from "../components/ui";
import { User } from "../context/UserProvider";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Admin from "../components/admin/Admin";
import theme from "../styles/theme";
import UserProfile from "../components/UserProfile";

export default function Profile() {
  const [user] = useContext(User);
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <>
      {user !== null && (
        <Layout>
          <Container>
            <Section>
              <Title>My Profile</Title>
              <AccountSection>
                <div>
                  <p>Hello! Welcome to your user profile.</p>
                  <p>Email: {user && user.email}</p>
                </div>
                <BtnContainer>
                  <Button>Change My Email</Button>
                  <Button color={theme.colors.secondary}>
                    Change My Password
                  </Button>
                </BtnContainer>
              </AccountSection>
              {user.role === "admin" ? <Admin /> : <UserProfile />}
            </Section>
          </Container>
        </Layout>
      )}
    </>
  );
}

// Styles
const Section = styled.section`
  padding: 2rem 0;
`;

const Title = styled.h1`
  text-align: center;
`;

const AccountSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 3.5rem;
  ${theme.mq()[0]} {
    flex-direction: row;
    padding-bottom: 0;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  ${theme.mq()[0]} {
    margin-top: 0;
  }
`;
