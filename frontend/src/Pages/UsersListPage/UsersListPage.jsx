import React, { useState, useEffect } from "react";
// Router
import { Link as RouterLink } from "react-router-dom";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getUsersList } from "../../actions/userActions";
// Components
import { Progress, UsersPanel } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const UsersListPage = () => {
  const dispatch = useDispatch();

  // Redux state
  const { loading, error, users } = useSelector((state) => state.userList);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  const editUserHandler = (userID) => {
    console.log(userID);
  };

  const deleteUserHandler = (userID) => {
    console.log(userID);
  };

  const usersPanelProps = {
    users,
    editUserHandler,
    deleteUserHandler,
  };

  return (
    <PageSection>
      <Container>
        <Typography variant="h4" component="h2">
          Users
        </Typography>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <UsersPanel {...usersPanelProps} />
        )}
      </Container>
    </PageSection>
  );
};

export default UsersListPage;
