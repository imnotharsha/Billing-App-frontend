const userInitState = [];

const userReducers = (state = userInitState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {...action.payload};
    }
    default: {
      return {...state};
    }
  }
};

export default userReducers;
