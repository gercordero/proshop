import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import { listProducts, topProducts } from "../../actions/productActions";
// Components
import {
  Products,
  Progress,
  Paginate,
  ProductCarousel,
} from "../../Components";
// Material UI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const HomePage = ({ match }) => {
  // Search product id
  const keyword = match.params.keyword;

  // Get page number
  const pageNumber = match.params.pageNumber || 1;

  // Redux state
  const dispatch = useDispatch();
  const { loading, error, products, pages } = useSelector(
    (state) => state.productList
  );
  const {
    loading: topRatedLoading,
    error: topRatedError,
    products: topRatedProducts,
  } = useSelector((state) => state.productTopRated);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch(topProducts());
  }, [dispatch, keyword, pageNumber]);

  return (
    <PageSection>
      <Container>
        {/* TOP PRODUCTS CAROUSEL */}
        {topRatedLoading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{topRatedError}</Alert>
        ) : (
          !keyword && <ProductCarousel products={topRatedProducts} />
        )}

        {/* ALL PRODUCTS */}
        <Typography variant="h3" component="h1" gutterBottom>
          Latest products
        </Typography>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : products.length === 0 ? (
          <Alert severity="info">
            No products with keyword "{keyword}" found!
          </Alert>
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
