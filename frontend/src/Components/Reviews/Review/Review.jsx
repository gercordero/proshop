import React from "react";
// Components
import { Rating } from "../../";
// Material UI
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Review = ({ name, rating, createdAt, comment }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {/* REVIEW NAME */}
      <Typography variant="body1">
        <strong>{name}</strong>
      </Typography>
      {/* REVIEW RATING */}
      <Rating rating={rating} />
      {/* REVIEW DATE */}
      <Typography variant="body2" gutterBottom>
        Date: {new Date(createdAt).toDateString()}
      </Typography>
      {/* REVIEW COMMENT */}
      <Typography variant="body1" gutterBottom>
        {comment}
      </Typography>
      <Divider component="div" style={{ marginTop: "1rem" }} />
    </div>
  );
};

export default Review;
