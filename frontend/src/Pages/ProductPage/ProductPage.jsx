import React, { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import { Product, Progress } from "../../Components";
// Meterial Ui
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";
// Single Product Data
import { singleProduct as productAction } from "../../actions/productActions";

const ProductPage = ({ match, history, ...rest }) => {
  // Quantity State that is pass to Product -> Order -> QuantitySelector
  const [quantity, setQuantity] = useState(1);
  // Redux state
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const { loading, error, product } = singleProduct;

  useEffect(() => {
    dispatch(productAction(match.params.id));
  }, [dispatch, match]);

  // Add order to cart function that is pass to Product -> Order
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  return (
    <PageSection>
      <Container>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Product
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            addToCartHandler={addToCartHandler}
          />
        )}
      </Container>
    </PageSection>
  );
};

export default ProductPage;
