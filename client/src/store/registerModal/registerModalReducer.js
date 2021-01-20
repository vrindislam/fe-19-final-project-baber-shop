import {SHOW_REGISTER_MODAL,HIDE_REGISTER_MODAL} from '../actionTypes'

const initialState = {
  registerModalOpen: false
}

export function myModalRegister(state = initialState, action) {
  switch (action.type) {
    case SHOW_REGISTER_MODAL:
      return {
        ...state,
        registerModalOpen: action.payload
      }
    case HIDE_REGISTER_MODAL:
      return {
        ...state,
        registerModalOpen: action.payload
      }
    default: return state
  }
}

export default myModalRegister