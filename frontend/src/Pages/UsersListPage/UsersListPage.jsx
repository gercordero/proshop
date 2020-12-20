import React, { useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getUsersList } from "../../actions/userActions";
// Components
import { Progress, UsersPanel } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const UsersListPage = ({ history }) => {
  const dispatch = useDispatch();

  // Redux state
  const { loading, error, users } = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    // If user is admin will see the user list else will be redirecte to login page
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUsersList());
    } else {
      history.push("/login");
    }
  }, [history, userInfo, dispatch]);

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
