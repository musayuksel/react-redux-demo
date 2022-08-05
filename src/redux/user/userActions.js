// [REDUX ACTION WITH PAYLOAD]
export const setUser = data => ({
  type: 'SET_USER',
  data,
});

// [REDUX ACTION]
export const clearUser = () => ({
  type: 'CLEAR_USER',
});

// [REDUX ACTION WITH PAYLOAD]
export const updateUser = data => ({
  type: 'UPDATE_USER',
  data,
});
