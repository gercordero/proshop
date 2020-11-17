import React, { useState, useEffect } from "react";
// Components
import { Products } from "../../Components";
// Material UI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// Styles
import { HomePageSection } from "./styles/HomePage.styles";
// Get Products
import { getProducts } from "../../api/products";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };

    fetchProducts();
  }, []);

  return (
    <HomePageSection>
      <Container>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Products {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </HomePageSection>
  );
};

export default HomePage;
