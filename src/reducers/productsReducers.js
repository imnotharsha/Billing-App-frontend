const productsInitState = [];
const productsReducers = (state = productsInitState, action) => {
  switch (action.type) {
    case 'SET_NEW_PRODUCTS': {
      //  return [...state, ...action.payload];
      return state.concat(action.payload);
    }
    case 'SET_PRODUCTS': {
      return [...action.payload];
    }
    case 'REMOVE_PRODUCTS': {
      return state.filter(product => product._id !== action.payload._id);
    }
    case 'EDIT_PRODUCTS': {
      return state.map(data => {
        return data._id === action.payload.id
          ? Object.assign({}, data, action.payload.data)
          : Object.assign({}, data);
      });
    }
    default: {
      return [...state];
    }
  }
};
export default productsReducers;
