import {SHOW_MODAL,HIDE_MODAL} from '../actionTypes'

const initialState = {
  modalOpen: false
}

export function modalHandler (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalOpen: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        modalOpen: action.payload
      }
    default: return state
  }
}

export default modalHandler