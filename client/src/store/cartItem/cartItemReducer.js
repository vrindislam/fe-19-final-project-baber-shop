import { ADDING_TO_CART, DELETE_FROM_CART } from "./actionTypes";

const initialState = [];

const cartProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      return [...state, action.payload.item];   ///
    case DELETE_FROM_CART:
      return state.filter(product => product.id !== action.payload.item);
    default: return state
  }
};

export default cartProducts

