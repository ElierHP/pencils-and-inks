import React, { useContext } from "react";
import { GiCheckMark } from "react-icons/gi";
import { HandleAsync, Ratings } from "./ui";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { isArray } from "../utils/isArray";
import { IoClose } from "react-icons/io5";
import { BsHandThumbsDownFill } from "react-icons/bs";
import { User } from "../context/UserProvider";
import { deleteReview } from "../utils/api/reviews";

export default function ReviewList({ data, isLoading, isError, refetch }) {
  const [user] = useContext(User);

  // Returns an array based on the data; for map iteration.
  const reviewsArray = () => {
    // If data is not undefined, run this.
    if (data) {
      if (isArray(data)) {
        // If data is an array, return it.
        return data;
      } else {
        // If result is not an array, convert it into one.
        return [{ ...data }];
      }
      // Else return empty array.
    } else {
      return [];
    }
  };

  return (
    <HandleAsync isLoading={isLoading} isError={isError}>
      <Ul>
        {reviewsArray().map((review) => (
          <Li key={review.id}>
            <Score>
              <RatingContainer>
                <Ratings rating={review.rating} mobileSize={"20px"} />
              </RatingContainer>
              {review.recommended ? (
                <Recommended>
                  <RecommendedText>Recommended!</RecommendedText>
                  <div>
                    <GiCheckMark color={theme.colors.success} size={30} />
                  </div>
                </Recommended>
              ) : (
                <Recommended>
                  <RecommendedText style={{ color: theme.colors.error }}>
                    Not Recommended!
                  </RecommendedText>
                  <div>
                    <BsHandThumbsDownFill
                      color={theme.colors.error}
                      size={30}
                    />
                  </div>
                </Recommended>
              )}
            </Score>
            <h4>{review.title}</h4>
            <CommentText>{review.comment}</CommentText>
            {user && review.user_id === user.id && (
              <CloseIcon>
                <IoClose
                  size={30}
                  color="inherit"
                  onClick={() => deleteReview(review.id, refetch)}
                />
              </CloseIcon>
            )}
          </Li>
        ))}
      </Ul>
    </HandleAsync>
  );
}

// Styles
const Ul = styled.ul`
  margin: 0;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Li = styled.li`
  position: relative;
  border: solid ${theme.colors.neutralLight} 3px;
  padding: 3rem;
  border-radius: 3px;
`;
const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  color: ${theme.colors.success};
`;

const RatingContainer = styled.div`
  margin-top: 0.8rem;
`;

const Recommended = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RecommendedText = styled.p`
  /* Galaxy Fold Breakpoint */
  @media only screen and (max-width: 410px) {
    display: none;
  }
  font-size: ${theme.fontSizes.small}rem;
  font-weight: ${theme.fontWeights.bold};
  display: block;
`;

const CommentText = styled.p`
  color: ${theme.colors.neutralDark};
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: ${theme.colors.neutral};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;
