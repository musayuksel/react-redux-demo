import { Button, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/user";
import { UserForm } from "..";

export const AuthenticatedUser = () => {
  // [REDUX HOOK]
  // useSelector is a hook that allows us to access the state of the redux store
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // [REDUX HOOK]
  // useDispatch is a hook that allows us to dispatch actions to the redux store
  const dispatch = useDispatch();

  // [REDUX HOOK]
  // [REDUX ACTION]
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <>
      <Typography variant="h5" mb={2}>
        {`Hello, ${user.details.firstName} ${user.details.lastName}`}
      </Typography>
      <Card variant="outlined"></Card>

      <UserForm />

      <Button
        variant="contained"
        onClick={handleLogout}
        sx={{
          marginTop: "1rem",
        }}
      >
        Logout
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/cart")}
        sx={{
          marginTop: "1rem",
        }}
      >
        Cart
      </Button>
    </>
  );
};
