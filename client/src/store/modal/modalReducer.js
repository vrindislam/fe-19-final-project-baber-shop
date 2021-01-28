import {HANDLE_MODAL} from "./modalActionTypes";

const initialState = {
  modalOpen: false
}

export function modalHandler (state = initialState, action) {
  switch (action.type) {
    case HANDLE_MODAL:
      return {
        ...state,
        modalOpen: action.payload
      }
    default: return state
  }
}

export default modalHandler