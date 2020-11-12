import React from "react";
import { HomePageSection } from "./styles/HomePage.styles";
import { Product } from "../../Components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import products from "../../products";

const HomePage = () => {
  return (
    <HomePageSection>
      <Container>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Product {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </HomePageSection>
  );
};

export default HomePage;
