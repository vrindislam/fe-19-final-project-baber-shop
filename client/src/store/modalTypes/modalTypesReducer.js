import { REGISTRATION_FORM_MODAL, LOGIN_FORM_MODAL } from '../actionTypes'

const initialState = {
  typesOfModal: ''
}

export function ModalTypes (state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_FORM_MODAL:
      return {
        ...state,
        typesOfModal: action.payload
      };
    case LOGIN_FORM_MODAL:
      return {
        ...state,
        typesOfModal: action.payload
      };
    default: return state
  }
}

export default ModalTypes