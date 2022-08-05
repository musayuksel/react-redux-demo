import { useForm, Controller } from 'react-hook-form';
import { Button, Input, InputLabel, Stack } from '@mui/material';
import * as yup from 'yup';
import { updateUser } from '../../redux/user';
import { useDispatch } from 'react-redux';
import { useYupResolver } from '../../hooks';

const formSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Email is required').required('Email is required'),
});

export const UserForm = () => {

  const resolver = useYupResolver(formSchema);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver,
  });

  // [REDUX HOOK]
  const dispatch = useDispatch();


  // [REDUX HOOK]
  // create an onSubmit function that will dispatch the action to the 
  // redux store on success full submission
  const onSubmit = data => {
    // [REDUX HOOK]
    // [REDUX ACTION]
    dispatch(updateUser(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}
        sx={{
          maxWidth: '300px',
        }}
      >
        <InputLabel>First Name</InputLabel>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.firstName && <span style={{ color: 'red' }}>{ errors.firstName.message }</span>}

        <InputLabel>Last Name</InputLabel>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.lastName && <span style={{ color: 'red' }}>{ errors.lastName.message }</span>}

        <InputLabel>Email</InputLabel>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.email && <span style={{ color: 'red' }}>{ errors.email.message }</span>}

        <Button variant='contained' type='submit'>Update User</Button>
      </Stack>
    </form>
  )
};
