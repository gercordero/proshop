import React from "react";
// Material UI
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const StarsPicker = ({ rating, setRating }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newRating) => {
          if (newRating === null) {
            setRating(0);
          } else {
            setRating(newRating);
          }
        }}
        precision={0.5}
        style={{ color: "#ffd700" }}
      />
    </div>
  );
};

export default StarsPicker;
