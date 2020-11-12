import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const yellow = { color: "#ffd700" }; //Gold color

/**
 * @param {integer} value - the average rating value
 * @param {integer} desiredValue - the maximun value that a star needs to be a full star
 */

const Star = ({ value, desiredValue }) => {
  return (
    <span>
      {/* If value >= 1 show full star, else if >= show half star, else empty star */}

      {value >= desiredValue ? (
        <FaStar style={yellow} />
      ) : value >= desiredValue - 0.5 ? (
        <FaStarHalfAlt style={yellow} />
      ) : (
        <FaRegStar style={yellow} />
      )}
    </span>
  );
};

Star.prototypes = {
  value: PropTypes.number.isRequired,
  desiredValue: PropTypes.number.isRequired,
};

export default Star;
