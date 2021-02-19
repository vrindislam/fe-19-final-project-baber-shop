import {ADD_FILTER, DELETE_FILTER} from "./filterActionTypes";

export const addFilter = (item) => dispatch => {
    dispatch({
        type: ADD_FILTER,
        payload: item
    })
}

export const deleteFilter = (item) => dispatch => {
    dispatch({
        type: DELETE_FILTER,
        payload: item
    })
}