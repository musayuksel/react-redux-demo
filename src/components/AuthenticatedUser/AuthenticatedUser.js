import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/user';
import { UserForm } from '..';

export const AuthenticatedUser = () => {

  // [REDUX HOOK]
  // useSelector is a hook that allows us to access the state of the redux store
  const user = useSelector(state => state.user);

  // [REDUX HOOK]
  // useDispatch is a hook that allows us to dispatch actions to the redux store
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <Typography variant='h5'
        mb={2}
      >
        {`Hello, ${user.details.firstName} ${user.details.lastName}`}
      </Typography>

      <UserForm />

      <Button
        variant='contained'
        onClick={handleLogout}
        sx={{
          marginTop: '1rem',
        }}
      >
        Logout
      </Button>
    </>
  )
};
