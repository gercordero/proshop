import styled from "styled-components";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

export const StyledCard = styled(Card)`
  max-width: 345px;
  height: 100%;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; // 16:9 aspect ratio
`;

export const StyledCardContent = styled(CardContent)`
  height: 50%;
`;
