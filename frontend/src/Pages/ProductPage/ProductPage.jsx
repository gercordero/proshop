import React from "react";
// Meterial Ui
import Container from "@material-ui/core/Container";
// Component
import { Product } from "../../Components";
// Styles
import { ProductPageSection } from "./styles/ProductPage.Styles";
// TESTING DATA IMPORT FROM LOCAL
import products from "../../products";

const ProductPage = ({ match, ...rest }) => {
  const product = products.find((product) => product._id === match.params.id);

  return (
    <ProductPageSection>
      <Container>
        <Product product={product} />
      </Container>
    </ProductPageSection>
  );
};

export default ProductPage;
