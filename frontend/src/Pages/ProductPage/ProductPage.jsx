import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Meterial Ui
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
// Component
import { Product, Progress } from "../../Components";
// Styles
import { ProductPageSection } from "./styles/ProductPage.Styles";
// Single Product Data
import { singleProduct as productAction } from "../../actions/productActions";

const ProductPage = ({ match, ...rest }) => {
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const { loading, error, product } = singleProduct;

  useEffect(() => {
    dispatch(productAction(match.params.id));
  }, [dispatch, match]);

  return (
    <ProductPageSection>
      <Container>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Product product={product} />
        )}
      </Container>
    </ProductPageSection>
  );
};

export default ProductPage;
