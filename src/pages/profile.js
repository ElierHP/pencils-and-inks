import { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Button, Container } from "../components/ui";
import { User } from "../context/UserProvider";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Admin from "../components/admin/Admin";
import theme from "../styles/theme";
import Wishlist from "../components/Wishlist";
import { Cart } from "../context/CartProvider";
import { logout } from "../utils/api/users";
import EditProfileForm from "../components/sections/EditProfileForm";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useContext(User);
  const router = useRouter();

  const [cart] = useContext(Cart);

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
              {!isEditing ? (
                <>
                  <AccountSection>
                    {/* Shopping Cart */}
                    <div>
                      <CartText>
                        Your shopping cart currenly has {cart.length}
                        {cart.length === 1 ? " item." : " items."}
                      </CartText>
                      <Btn>
                        <Button href="/cart" isLink={true}>
                          Go to Cart
                        </Button>
                      </Btn>
                    </div>

                    {/* Change Email/Password buttons */}
                    <BtnContainer>
                      <Btn>
                        <Button
                          color={theme.colors.secondary}
                          onClick={() => setIsEditing(true)}
                        >
                          Edit Account
                        </Button>
                      </Btn>
                      <Btn>
                        <Button onClick={() => logout(setUser, router)}>
                          Logout
                        </Button>
                      </Btn>
                    </BtnContainer>
                  </AccountSection>

                  {user.role === "admin" ? <Admin /> : <Wishlist />}
                </>
              ) : (
                <EditProfileForm setIsEditing={setIsEditing} />
              )}
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
  margin-bottom: 3rem;
`;

const AccountSection = styled.div`
  /* Galaxy Fold Breakpoint */
  @media only screen and (max-width: 350px) {
    padding: 1rem;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 3.5rem;
  border: solid ${theme.colors.neutralLight} 3px;
  border-radius: 3px;
  padding: 3rem;
  margin-bottom: 2rem;
  ${theme.mq()[1]} {
    flex-direction: row;
    padding: 5rem;
  }
`;

const Btn = styled.div`
  width: 100%;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  ${theme.mq()[1]} {
    flex-direction: column;
    margin-top: 0;
  }
`;

const CartText = styled.p`
  margin-bottom: 1rem;
`;
