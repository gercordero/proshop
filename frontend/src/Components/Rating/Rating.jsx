import React from "react";
import PropTypes from "prop-types";
import Star from "./Star/Star";
import { StarsContainer } from "./styles/Rating.styles";

/**
 * @param {integer} value - the average rating value
 * @param {string} text - the number of reviews to put next to the stars rating
 */
const Rating = ({ value, text }) => {
  // There are 5 stars and the maximun rating that we can have is 5
  const values = [1, 2, 3, 4, 5];

  return (
    <StarsContainer>
      {values.map((desiredValue, index) => (
        <Star key={index} value={value} desiredValue={desiredValue} />
      ))}
      <span>{text && text}</span>
    </StarsContainer>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
};

export default Rating;
