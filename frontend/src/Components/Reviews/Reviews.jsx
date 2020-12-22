import React from "react";
// Components
import Review from "./Review/Review";
// Material UI
import Grid from "@material-ui/core/Grid";

import Alert from "@material-ui/lab/Alert";

const Reviews = ({ reviews }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6}>
        {reviews.length === 0 ? (
          <Alert severity="info">No reviews</Alert>
        ) : (
          reviews.map((review) => <Review key={review._id} {...review} />)
        )}
      </Grid>
    </Grid>
  );
};

export default Reviews;
