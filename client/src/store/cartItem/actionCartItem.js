import {ADDING_TO_CART,DELETE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY} from "./actionTypes"

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

export const increaseCart = (array) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {array}
  }
}

export const decreaseCart = (array) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {array}
  }
}