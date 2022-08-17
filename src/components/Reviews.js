import React, { useState } from "react";
import { getReviews } from "../utils/api/reviews";
import { useQuery } from "react-query";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Reviews() {
  const [isCommenting, setIsCommenting] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  // Get Request for all reviews
  const { data, isLoading, isError } = useQuery("reviews", () => getReviews());

  const handleClick = () => {
    setHideButton(!hideButton);
    setShowMenu(!showMenu);
  };

  const ReviewButtonClick = (e) => {
    e.target.blur();
    setIsCommenting(!isCommenting);
  };
  return (
    <section>
      {/* Title and Add Comment Button */}
      <TitleContainer>
        <Title>Customer Reviews</Title>
        <Icon>
          {showMenu ? (
            <IoAddCircleOutline
              size={30}
              onClick={() => handleClick()}
              color="inherit"
            />
          ) : (
            <IoClose size={30} onClick={() => handleClick()} color="inherit" />
          )}
        </Icon>

        <ReviewButton
          hideButton={hideButton}
          onClick={(e) => ReviewButtonClick(e)}
        >
          Write Review
        </ReviewButton>
      </TitleContainer>

      {/* Display Comments or Comment Form */}
      {!isCommenting ? (
        <CommentsList data={data} isLoading={isLoading} isError={isError} />
      ) : (
        <CommentForm setIsCommenting={setIsCommenting} />
      )}
    </section>
  );
}

// Styles
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${theme.mq()[0]} {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  /* Extra Small Screens */
  @media only screen and (max-width: 320px) {
    width: 150px;
  }
`;

const Icon = styled.div`
  display: block;
  color: ${theme.colors.neutral};
  ${theme.mq()[0]} {
    display: none;
  }
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;

const ReviewButton = styled.button`
  display: ${(props) => (props.hideButton ? "none" : "block")};
  padding: 1rem 2rem;
  border: 3px solid ${theme.colors.neutralLight};
  box-shadow: 3px 3px 10px ${theme.colors.neutralLight};
  flex-basis: 100%;
  color: ${theme.colors.neutralDark};
  margin-bottom: 1rem;
  ${theme.mq()[0]} {
    display: block;
    flex-basis: initial;
    margin-bottom: 0;
  }
  &:hover {
    color: ${theme.colors.light};
    background: ${theme.colors.neutral};
    border: 3px solid ${theme.colors.neutral};
    box-shadow: 3px 3px 10px ${theme.colors.neutral};
  }
  &:focus {
    border: 3px solid ${theme.colors.neutral};
  }
`;
