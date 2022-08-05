import { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "../components/ui";
import { User } from "../context/UserProvider";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Admin from "../components/admin/Admin";

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
              <p>Email: {user && user.email}</p>
              {user.role === "admin" ? <Admin /> : <p>Member</p>}
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
  text-align: center;
`;

const Title = styled.h1``;
