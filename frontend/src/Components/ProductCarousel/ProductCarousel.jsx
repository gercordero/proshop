import React from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import Link from "@material-ui/core/Link";
// Styled components
import {
  StyledDiv,
  StyledTitle,
  StyledSlider,
  StyledImageContainer,
} from "./styles/ProductCarousel.styles";
// React icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// Slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <GrFormPrevious style={{ color: "white" }} />,
    nextArrow: <GrFormNext />,
  };

  return (
    <StyledSlider {...settings}>
      {products.map((product) => (
        <StyledDiv>
          <StyledTitle>
            {product.name} (${product.price})
          </StyledTitle>
          <StyledImageContainer key={product._id}>
            <Link component={RouterLink} to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", margin: "0 auto" }}
              />
            </Link>
          </StyledImageContainer>
        </StyledDiv>
      ))}
    </StyledSlider>
  );
};

export default ProductCarousel;

// {products.map((product) => {
//   <div key={product._id} style={{ width: 100 }}>
//     <p>100</p>
//     <img
//       src={product.image}
//       alt={product.name}
//       style={{ width: "100%" }}
//     />
//   </div>;
// })}
