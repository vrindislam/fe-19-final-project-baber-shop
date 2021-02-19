import {ADD_FILTER, DELETE_FILTER} from "./filterActionTypes";

const initialState = {
    filters: []
}

function filterReducer (state = initialState, action) {
    switch (action.type) {

        case ADD_FILTER :

            return {
                ...state,
                filters: [...state.filters, action.payload]
            }
        case DELETE_FILTER:

            return {
                filters: [...state.filters.filter(item => item.name !== action.payload.name)]
            }

        default: return state
    }
}

export default filterReducer;