import React, { useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getUsersList, deleteUser } from "../../actions/userActions";
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
  const { success: successDelete, loading: loadingDelete } = useSelector(
    (state) => state.userDelete
  );

  useEffect(() => {
    // If user is admin will see the user list else will be redirecte to login page
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUsersList());
    } else {
      history.push("/login");
    }
  }, [history, userInfo, dispatch, successDelete]);

  const editUserHandler = (userID) => {
    console.log(userID);
  };

  const deleteUserHandler = (userID) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(userID));
    }
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
        {loading || loadingDelete ? (
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
