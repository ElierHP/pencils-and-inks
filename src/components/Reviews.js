import React, { useState } from "react";
import { getReviews } from "../utils/api/reviews";
import { useQuery } from "react-query";
import { HandleAsync, Ratings } from "./ui";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { GiCheckMark } from "react-icons/gi";
import CommentForm from "./CommentForm";

export default function Reviews() {
  const [isCommenting, setIsCommenting] = useState(false);

  // Get Request for all reviews
  const { data, isLoading, isError } = useQuery("reviews", () => getReviews());

  //   Reviews start as empty array.
  const reviewsArray = () => (data ? data : []);

  return (
    <section>
      <TitleContainer>
        <h2>Customer Reviews</h2>
        <ReviewButton onClick={() => setIsCommenting(!isCommenting)}>
          Write Review
        </ReviewButton>
      </TitleContainer>
      {!isCommenting ? (
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
                <p>{review.comment}</p>
              </li>
            ))}
          </Ul>
        </HandleAsync>
      ) : (
        <CommentForm setIsCommenting={setIsCommenting} />
      )}
    </section>
  );
}

// Styles
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewButton = styled.button`
  padding: 1rem 2rem;
  border: 3px solid ${theme.colors.neutralLight};
  box-shadow: 3px 3px 10px ${theme.colors.neutralLight};
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
