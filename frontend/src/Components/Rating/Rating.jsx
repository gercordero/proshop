import React from "react";
import PropTypes from "prop-types";
import Star from "./Star/Star";
import { StarsContainer } from "./styles/Rating.styles";

/**
 * @param {integer} value - the average rating value
 * @param {string} numReviews - the number of reviews to put next to the stars rating
 */
const Rating = ({ rating, numReviews }) => {
  // There are 5 stars and the maximun rating that we can have is 5
  const ratings = [1, 2, 3, 4, 5];

  return (
    <StarsContainer>
      {ratings.map((desiredRating, index) => (
        <Star key={index} rating={rating} desiredRating={desiredRating} />
      ))}
      <span>{numReviews && ` ${numReviews} reviews`}</span>
    </StarsContainer>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number,
};

export default Rating;
