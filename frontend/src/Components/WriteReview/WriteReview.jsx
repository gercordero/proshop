import React from "react";
// Components
import StarsPicker from "./StarsPicker/StarsPicker";
// Material UI
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const WriteReview = ({
  rating,
  setRating,
  setComment,
  ratingSubmitHandler,
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <form onSubmit={ratingSubmitHandler}>
          {/* RATING */}
          <StarsPicker rating={rating} setRating={setRating} />
          {/* COMMENT */}
          <FormControl
            fullWidth
            required
            margin="normal"
            onChange={(e) => setComment(e.target.value)}
          >
            <TextField
              id="comment"
              label="Write a comment"
              multiline
              rows={4}
              variant="outlined"
            />
          </FormControl>
          {/* SUBMIT */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{ fontWeight: "bold", margin: "16px 0" }}
          >
            Comment
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default WriteReview;
