import React from "react";
// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Component
import { Rating } from "../../../";

const Description = ({ product, ...rest }) => {
  const { name, description, price, rating, numReviews } = product;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography variant="h4" component="h1">
              {name}
            </Typography>
          }
        />
      </ListItem>
      <Divider component="div" />
      <ListItem alignItems="flex-start">
        <Rating rating={rating} numReviews={numReviews} />
      </ListItem>
      <Divider component="div" />
      <ListItem alignItems="flex-start">
        <ListItemText primary={<strong>{`Price: ${price}$`}</strong>} />
      </ListItem>
      <Divider component="div" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default Description;
