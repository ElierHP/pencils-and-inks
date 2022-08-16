import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { v4 as uuidv4 } from "uuid";

export default function Ratings({ rating, mobileSize = "10px" }) {
  // Styles
  const RatingContainer = styled.div`
    display: flex;
    gap: 0.1rem;
    ${theme.mq()[2]} {
      gap: 0.3rem;
    }
  `;

  const FilledStar = styled(AiFillStar)`
    font-size: ${mobileSize};
    ${theme.mq()[2]} {
      font-size: 20px;
    }
  `;

  const OutLinedStar = styled(AiOutlineStar)`
    font-size: ${mobileSize};
    ${theme.mq()[2]} {
      font-size: 20px;
    }
  `;

  const generateRating = (rating) => {
    const ratingArr = [];
    for (let y = 1; y <= 5; y++) {
      if (rating === 0) {
        ratingArr.push("outline");
      } else {
        ratingArr.push("fill");
        rating = rating - 1;
      }
    }
    return ratingArr;
  };

  return (
    <RatingContainer>
      {generateRating(rating).map((rating) => (
        <div key={uuidv4()}>
          {rating === "fill" ? (
            <FilledStar color={theme.colors.secondary} />
          ) : (
            <OutLinedStar color={theme.colors.secondary} />
          )}
        </div>
      ))}
    </RatingContainer>
  );
}
