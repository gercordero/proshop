import React from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Components
import { Rating } from "../../Components";
// Meterial Ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// Styles
import {
  ProductPageSection,
  StyledImage,
  StyledList,
  StyledButton,
} from "./styles/ProductPage.Styles";
// TESTING DATA IMPORT FROM LOCAL
import products from "../../products";

const ProductPage = ({ match, ...rest }) => {
  const product = products.find((product) => product._id === match.params.id);
  const {
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
  } = product;

  return (
    <ProductPageSection>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <StyledImage src={image} alt="Product image" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledList>
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
            </StyledList>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Paper variant="outlined" square>
              <StyledList>
                <ListItem>
                  <ListItemText primary="Price:" />
                  <ListItemText primary={price + "$"} />
                </ListItem>
                <Divider component="div" />
                <ListItem>
                  <ListItemText primary="Stock:" />
                  <ListItemText
                    primary={countInStock > 0 ? "In Stock" : "Out of Stock"}
                  />
                </ListItem>
                <Divider component="div" />
                <ListItem>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={countInStock === 0}
                  >
                    add to cart
                  </StyledButton>
                </ListItem>
              </StyledList>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ProductPageSection>
  );
};

export default ProductPage;
