import {CHANGE_MAX_PRICE, CHANGE_MIN_PRICE} from "./priceSliderAtionTypes";

const initialState = {
    price: {minPrice: 100, maxPrice: 700}
}

function priceSliderReducer (state = initialState, action) {
    switch (action.type) {

        case CHANGE_MAX_PRICE :

            return {
                ...state,
                price: {...state.price.maxPrice, ...action.payload}
            }

        case CHANGE_MIN_PRICE :

            return {
                ...state,
                price: {...state.price.minPrice, ...action.payload}
            }

        default: return state
    }
}

export default priceSliderReducer;