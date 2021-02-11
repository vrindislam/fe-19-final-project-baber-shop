import {ADDING_TO_CART,DELETE_FROM_CART,QUANTITY_HANDLER} from "./actionTypes"

export const addToCart = item  => {
  return {
    type: ADDING_TO_CART,
    payload: {item}
  }
}

export const deleteFromCart = id  => {
  return {
    type: DELETE_FROM_CART,
    payload: {id}
  }
}

export const quantityHandler = (object) => {
  return {
    type: QUANTITY_HANDLER,
    payload: {object}
  }
}

// export const decreaseCart = (array) => {
//   return {
//     type: DECREASE_QUANTITY,
//     payload: {array}
//   }
// }