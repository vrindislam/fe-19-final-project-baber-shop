import { ADDING_TO_CART, DELETE_FROM_CART, DECREASE_QUANTITY,INCREASE_QUANTITY,UPDATE_CART, RESET_CART } from "./actionTypes";

const initialState = {
  products: {
    products:[]
  },
  available: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      return {...state, products: {products: [...state.products.products.filter(item => item.product2._id !== action.payload.item.product2._id),action.payload.item]}}
      // return {...state, products: {products: [...state.products.products.filter(item => item.product._id !== action.payload.item.product._id),action.payload.item]},available: [...state.available, {...action.payload.item.product, quantity: action.payload.item.product.quantity - 1}]}
    case DELETE_FROM_CART:
      return {...state, products: {products: [...state.products.products.filter(item => item.product._id !== action.payload._id)]}}
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: {products: state.products.products.map(product =>
          product.product._id === action.payload._id
            ? {...product, cartQuantity: product.cartQuantity + 1, product: {...product.product, quantity: product.product.quantity - 1} }
            // ? { ...product, cartQuantity: product.cartQuantity + 1}
            : product,
        )},
        available: state.available.map(item => item._id === action.payload._id
          ? {...item, quantity: item.quantity - 1}
          : item),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: {products: state.products.products.map(product =>
          product.product._id === action.payload._id
            ? { ...product, cartQuantity: product.cartQuantity - 1}
            : product,
        )},
        available: state.available.map(item => item._id === action.payload._id
          ? {...item, quantity: item.quantity + 1}
          : item),
      };
    case UPDATE_CART:
      return {
        ...state, products: {products: action.payload.updatedCart}
      }
    case RESET_CART:
      return initialState
    default:
      return state;
  }
};

export default cartReducer;