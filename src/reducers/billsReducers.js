const initBillState = [];

const billsReducers = (state = initBillState, action) => {
  switch (action.type) {
    case 'SET_BILLS': {
      return [...action.payload];
    }
    case ' SET_NEW_Bills': {
      return [...state, ...action.payload];
    }
    case 'SET_DELETE_BILLS': {
      return state.filter(ele => ele._id !== action.payload._id);
    }
    default: {
      return [...state];
    }
  }
};
export default billsReducers;
