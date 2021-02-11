import { ADDING_TO_CART, DELETE_FROM_CART, QUANTITY_HANDLER } from "./actionTypes";

const initialState = [];

const cartProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      return [...state.filter(product => product.itemNo !== action.payload.item.itemNo),action.payload.item];
    case DELETE_FROM_CART:
      return state.filter(product => product._id !== action.payload.id);
    case QUANTITY_HANDLER:
      return [...state.filter(product => product.itemNo !== action.payload.object.itemNo),action.payload.object];
    default:
      return state;
  }
};

export default cartProducts;