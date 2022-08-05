// initial state for userReducer
export const defaultUser = {
  isAuthenticated: false,
  details: {
    firstName: '',
    lastName: '',
    email: '',
  }
};


// [REDUX REDUCER] 
export const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    
    case 'SET_USER':
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
      };
    
    case 'CLEAR_USER':
      return {
        ...defaultUser,
      }

    case 'UPDATE_USER':
      return {
        ...state,
        details: {
          ...state.details,
          ...action.data,
        }
      }

    default:
      return state;
  }
};
