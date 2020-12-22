import React from "react";
// React Router
import { Route } from "react-router";
import { Link } from "react-router-dom";
// Material UI
import PaginationItem from "@material-ui/lab/PaginationItem";
// Styled components
import { StyledPagination } from "./styles/Paginate.styles";

const Paginate = ({ pages, keyword = "" }) => {
  return (
    pages > 1 && (
      <Route>
        {({ match }) => {
          const pageNumber = match.params.pageNumber || 1;
          return (
            <StyledPagination
              variant="outlined"
              shape="rounded"
              color="primary"
              page={Number(pageNumber)}
              count={pages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={
                    keyword
                      ? `/search/${keyword}/page/${item.page}`
                      : `/page/${item.page}`
                  }
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    )
  );
};

export default Paginate;
