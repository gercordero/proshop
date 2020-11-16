import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const yellow = { color: "#ffd700" }; //Gold color

/**
 * @param {integer} rating - the average rating of the product
 * @param {integer} desiredRating - the maximun rating that a star needs to be a full star
 */

const Star = ({ rating, desiredRating }) => {
  return (
    <span>
      {/* If rating >= 1 show full star, else if >= show half star, else empty star */}

      {rating >= desiredRating ? (
        <FaStar style={yellow} />
      ) : rating >= desiredRating - 0.5 ? (
        <FaStarHalfAlt style={yellow} />
      ) : (
        <FaRegStar style={yellow} />
      )}
    </span>
  );
};

Star.prototypes = {
  rating: PropTypes.number.isRequired,
  desiredRating: PropTypes.number.isRequired,
};

export default Star;
