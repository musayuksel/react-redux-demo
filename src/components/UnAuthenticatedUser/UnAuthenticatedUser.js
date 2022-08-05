import { Button, Typography, Stack } from '@mui/material'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user';

export const UnAuthenticatedUser = () => {

  // [REDUX HOOK]
  // useDispatch is a hook that allows us to dispatch actions to the redux store
  const dispatch = useDispatch();

  // [REDUX HOOK]
  // [REDUX ACTION]
  // create a handler that will dispatch the setUser action
  const handleLogin = () => {
    dispatch(setUser({
      details: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@and.digital'
      }
    }));
  };

  return (
    <>
      <Stack spacing={2}
        sx={{
          maxWidth: '300px',
        }}
      >
        <Typography>
          You are not logged in
        </Typography>

        <Button
          variant='contained'
          onClick={handleLogin}
        >
          Login
        </Button>
      </Stack>
    </>
  )
};
