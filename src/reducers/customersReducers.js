const customersInitialState = [];

const customersReducers = (state = customersInitialState, action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS': {
      return [...action.payload];
    }
    case 'SET_NEW_CUSTOMERS': {
      return [...state].concat(action.payload);
    }
    case 'REMOVE_CUSTOMER': {
      return state.filter(ele => ele._id !== action.payload._id);
    }
    default: {
      return [...state];
    }
  }
};
export default customersReducers;
