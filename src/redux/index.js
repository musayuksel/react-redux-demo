import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user';

const reducers = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: reducers,
});
