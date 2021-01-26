import {FILTER_ADDED, FILTER_DELETED} from "../actionTypes";

export const checkboxFilterAdd = (item) => (dispatch) => {

    dispatch({
        type: FILTER_ADDED,
        payload: item
    })
}

export const checkboxFilterDelete = (item) => (dispatch) => {

    dispatch({
        type: FILTER_DELETED,
        payload: item
    })
}