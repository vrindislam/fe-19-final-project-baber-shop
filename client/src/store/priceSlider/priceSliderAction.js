import {CHANGE_MAX_PRICE, CHANGE_MIN_PRICE} from "./priceSliderAtionTypes";

export const changeMaxPrice = (item) => dispatch => {
    dispatch({
        type: CHANGE_MAX_PRICE,
        payload: item
    })
}
export const changeMinPrice = (item) => dispatch => {
    dispatch({
        type: CHANGE_MIN_PRICE,
        payload: item
    })
}