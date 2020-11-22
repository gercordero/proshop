import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import { Products, Progress } from "../../Components";
// Material UI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styles
import { HomePageSection } from "./styles/HomePage.styles";
// Products Data
import { listProducts } from "../../actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <HomePageSection>
      <Container>
        <Typography variant="h2" gutterBottom>
          Latest products
        </Typography>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <Products {...product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </HomePageSection>
  );
};

export default HomePage;
