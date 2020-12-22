import React, { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  singleProduct as getSingleProduct,
  createProductReview,
} from "../../actions/productActions";
// Redux constants
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
// Components
import { Product, Progress, Reviews, WriteReview } from "../../Components";
// Meterial Ui
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
// Styled components
import { PageSection } from "../styles/PageSection";

const ProductPage = ({ match, history }) => {
  // Quantity State that is pass to Product -> Order -> QuantitySelector
  const [quantity, setQuantity] = useState(1);
  // Review state
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // *** Redux state ****
  const dispatch = useDispatch();
  // Logged in User state
  const { userInfo } = useSelector((state) => state.userLogin);

  // Single product state
  const { loading, error, product } = useSelector(
    (state) => state.singleProduct
  );

  // Review state
  const { loading: reviewLoading, error: reviewError, success } = useSelector(
    (state) => state.productReviewCreate
  );
  // *** End of Redux state ****

  useEffect(() => {
    if (success) {
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(getSingleProduct(match.params.id));
  }, [dispatch, match, success]);

  // Add order to cart function that is pass to Product -> Order
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  // Add new rating handler
  const ratingSubmitHandler = (e) => {
    e.preventDefault();
    const newReview = { rating, comment };
    dispatch(createProductReview(match.params.id, newReview));
  };

  // Product props
  const productProps = {
    product,
    quantity,
    setQuantity,
    addToCartHandler,
  };

  // Write review props
  const writeReviewProps = {
    rating,
    setRating,
    setComment,
    ratingSubmitHandler,
  };

  return (
    <PageSection>
      <Container>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {/* Product */}
            <Product {...productProps} />
            {/* Write a review */}
            <Typography
              variant="h4"
              component="h2"
              style={{ marginTop: "2rem" }}
            >
              Write a review
            </Typography>
            {userInfo ? (
              reviewError ? (
                <Alert severity="error">{reviewError}</Alert>
              ) : (
                <WriteReview {...writeReviewProps} />
              )
            ) : (
              <Alert severity="info">Please login to write a comment</Alert>
            )}
            {/* Reviews */}
            <Typography
              variant="h4"
              component="h2"
              style={{ marginTop: "2rem" }}
            >
              Reviews
            </Typography>
            {reviewLoading ? (
              <Progress />
            ) : (
              <Reviews reviews={product.reviews} />
            )}
          </>
        )}
      </Container>
    </PageSection>
  );
};

export default ProductPage;
