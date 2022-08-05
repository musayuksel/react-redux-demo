import './App.css';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AuthenticatedUser, UnAuthenticatedUser } from './components';

const App = () => {

  // [REDUX HOOK]
  // useSelector is a hook that allows us to access the state of the redux store
  // you can use it more than once in a component
  const user = useSelector(state => state.user);

  return (
    <Box
      p={10}
    > 
      <Typography variant='h3'
        sx={{
          fontWeight: 'bold',
        }}
        mb={2}
      >
        Redux Demo 
      </Typography>

      { user.isAuthenticated &&
        <AuthenticatedUser />
      }

      { !user.isAuthenticated &&
        <UnAuthenticatedUser />
      }
    </Box>
  )
}

export default App;
