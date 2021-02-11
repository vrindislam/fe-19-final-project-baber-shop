import { ADDING_TO_CART, DELETE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";

const initialState = [];
const newArrayIncreased = [];
const newArrayDecreased = [];
const cartProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      return [...state.filter(product => product.itemNo !== action.payload.item.itemNo),action.payload.item];
    case DELETE_FROM_CART:
      return state.filter(product => product._id !== action.payload.id);
    case INCREASE_QUANTITY:

      action.payload.array.forEach(item => {
        newArrayIncreased.push(item);
      });
      return state.products = newArrayIncreased;
    case DECREASE_QUANTITY:

      action.payload.array.forEach(item => {
        newArrayDecreased.push(item);
      });
      return state.products = newArrayDecreased;
    default:
      return state;
  }
};

export default cartProducts;

// const initialState = [];
//
// const cartProducts = (state = initialState, action) => {
//   switch (action.type) {
//     case ADDING_TO_CART:
//       return [...state, action.payload.item];
//     case DELETE_FROM_CART:
//       return state.filter(product => product._id !== action.payload.id);
//     default: return state
//   }
// };
//
// export default cartProducts



// const initialState = {
//   products: []
// };

// case ADDING_TO_CART:
//   return {...state,
//     products: [...state.products, action.payload.item]
//   };
// case DELETE_FROM_CART:
//   return {...state.products.filter(product => product._id !== action.payload.id)};