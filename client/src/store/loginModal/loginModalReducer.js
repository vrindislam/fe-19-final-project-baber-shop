import {SHOW_LOGIN_MODAL, HIDE_LOGIN_MODAL} from "../actionTypes";

const initialState = {
    loginModalVisible: false
}

export function loginModal (state = initialState, action) {
    switch (action.type) {
        case SHOW_LOGIN_MODAL:
            return {
                ...state,
                loginModalVisible: action.payload
            }
        case HIDE_LOGIN_MODAL:
            return {
                ...state,
                loginModalVisible: action.payload
            }
        default: return state
    }
}

export default loginModal