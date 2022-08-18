import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { HandleAsync, Ratings } from "./ui";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { isArray } from "../utils/isArray";

export default function ReviewsList({ data, isLoading, isError }) {
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
          <li key={review.id}>
            <Score>
              <RatingContainer>
                <Ratings rating={review.rating} mobileSize={"20px"} />
              </RatingContainer>
              {review.recommended ? (
                <Recommended>
                  <RecommendedText>Recommended! </RecommendedText>
                  <div>
                    <GiCheckMark color={theme.colors.success} size={30} />
                  </div>
                </Recommended>
              ) : (
                <p>Not Recommended! </p>
              )}
            </Score>
            <h4>{review.title}</h4>
            <CommentText>{review.comment}</CommentText>
          </li>
        ))}
      </Ul>
    </HandleAsync>
  );
}

// Styles
const Ul = styled.ul`
  border: solid ${theme.colors.neutralLight} 3px;
  padding: 3rem;
  margin: 0;
  border-radius: 3px;
  margin-top: 3rem;
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
