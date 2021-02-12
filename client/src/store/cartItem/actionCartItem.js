import {ADDING_TO_CART,DELETE_FROM_CART,DECREASE_QUANTITY,INCREASE_QUANTITY} from "./actionTypes"

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

export const increaseQuantity = (_id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {_id}
  }
}

export const decreaseQuantity = (_id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {_id}
  }
}

