import {PRICE_CHANGED} from "../actionTypes";

export const priceFilter = (item) => (dispatch) => {

    dispatch({
        type: PRICE_CHANGED,
        payload: item
    })
}