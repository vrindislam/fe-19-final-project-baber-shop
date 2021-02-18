import { ADDING_TO_CART, DELETE_FROM_CART, DECREASE_QUANTITY,INCREASE_QUANTITY,RESET_CART } from "./actionTypes";


const initialState = {
  products: [],
  // cartQuantity: 0
};

const cartProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      return {...state, products: [...state.products.filter(item => item._id !== action.payload.item._id),action.payload.item]}
      // return {...state, products: [...state.products, action.payload.item]}
    case DELETE_FROM_CART:
      return {...state, products: [...state.products.filter(product => product._id !== action.payload.id)]}
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.payload._id
            ? {...product, cartQuantity: product.cartQuantity + 1}
            : product,
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.payload._id
            ? {
              ...product, cartQuantity: product.cartQuantity - 1
            }
            : product,
        ),
      };
    case RESET_CART:
      return initialState
    default:
      return state;
  }
};

export default cartProducts;