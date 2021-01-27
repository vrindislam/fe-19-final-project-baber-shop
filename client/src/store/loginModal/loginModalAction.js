import {SHOW_LOGIN_MODAL, HIDE_LOGIN_MODAL} from "../actionTypes";

export const showLoginModal = () => dispatch => {
    dispatch({
        type: SHOW_LOGIN_MODAL,
        payload: true
    })
}

export const hideLoginModal = () => dispatch => {
    dispatch({
        type: HIDE_LOGIN_MODAL,
        payload: false
    })
}