import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import { Products, Progress, Paginate } from "../../Components";
// Material UI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";
// Products Data
import { listProducts } from "../../actions/productActions";

const HomePage = ({ match }) => {
  // Search product id
  const keyword = match.params.keyword;

  // Get page number
  const pageNumber = match.params.pageNumber || 1;

  // Redux state
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <PageSection>
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

        <Paginate pages={pages} keyword={keyword} />
      </Container>
    </PageSection>
  );
};

export default HomePage;
