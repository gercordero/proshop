import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Rating } from "..";
import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
} from "./styles/Products.styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

/**
 * @param {integer} _id - the id of the product
 * @param {string} name - the name of the product
 * @param {string} image - the path to the image
 * @param {string} description - the description of the product
 * @param {string} brand - the brand of the product
 * @param {string} category - the category of the product
 * @param {float} price - the price of the product
 * @param {integer} countInStock - the amount of stock of the product
 * @param {float} rating - the rating of the product
 * @param {integer} numReviews - the amount of reviews of the product
 * @param {any type} rest - the rest of the props if any
 */

const Products = ({
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
      <CardActionArea>
        <Link component={RouterLink} to={`/product/${_id}`}>
          <StyledCardMedia image={image} title="Paella dish" />
        </Link>
      </CardActionArea>
      <StyledCardContent>
        <Link component={RouterLink} to={`/product/${_id}`}>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <Typography variant="h4" component="h2">
          {`$${price}`}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Products;
