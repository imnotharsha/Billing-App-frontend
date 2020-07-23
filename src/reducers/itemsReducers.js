const initItemsState = [];
const itemsReducers = (state = initItemsState, action) => {
  switch (action.type) {
    case 'ADD_ITEMS': {
      return [...state, ...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default itemsReducers;
