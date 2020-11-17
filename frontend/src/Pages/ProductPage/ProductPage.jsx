import React, { useState, useEffect } from "react";
// Meterial Ui
import Container from "@material-ui/core/Container";
// Component
import { Product } from "../../Components";
// Styles
import { ProductPageSection } from "./styles/ProductPage.Styles";
// Get products
import { getSingleProduct } from "../../api/products";

const ProductPage = ({ match, ...rest }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchSingleProduct = async (id) => {
      setProduct(await getSingleProduct(id));
    };

    fetchSingleProduct(match.params.id);
  }, [match]);

  return (
    <ProductPageSection>
      <Container>
        {Object.keys(product).length !== 0 && <Product product={product} />}
      </Container>
    </ProductPageSection>
  );
};

export default ProductPage;
