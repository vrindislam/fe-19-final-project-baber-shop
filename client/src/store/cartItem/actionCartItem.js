import {ADDING_TO_CART,DELETE_FROM_CART} from "./actionTypes"

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