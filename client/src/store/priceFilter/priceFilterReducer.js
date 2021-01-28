import {PRICE_CHANGED} from "../actionTypes";

const initialState = {
    price: {}
}

export default function priceFilterReducer(state = initialState, action){

    switch (action.type){

        case PRICE_CHANGED:

            return {
                ...state,
                price: {...state.price, ...action.payload}
            }

        default:
            return state
    }
}