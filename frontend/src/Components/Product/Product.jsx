import React from "react";
import { StyledCard, StyledCardMedia } from "./styles/Product.styles";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const Product = ({
  _id,
  name,
  image,
  description,
  brand,
  category,
  price,
  countInStock,
  rating,
  numReviews,
  ...rest
}) => {
  return (
    <StyledCard>
      <a href={`/product/${_id}`}>
        <StyledCardMedia image={image} title="Paella dish" />
      </a>
      <CardContent>
        <a href={`/product/${_id}`}>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </a>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {`${rating} from ${numReviews} reviews`}
        </Typography>
        <Typography variant="h4" component="h2">
          {`$${price}`}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Product;
