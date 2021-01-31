import {FILTER_ADDED, FILTER_DELETED} from "../actionTypes";

const initialState = {
    filters: []
}

export default function filterReducer(state = initialState, action){

    switch (action.type){

        case FILTER_ADDED:

            return {
                ...state,
                filters: [...state.filters, action.payload]
            }

        case FILTER_DELETED:

            return {
                filters: [...state.filters.filter(item => item.name !== action.payload.name)]
            }

        default:
            return state
    }
}