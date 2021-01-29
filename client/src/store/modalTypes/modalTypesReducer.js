import { MODAL_TYPE } from './actionsTypes'

const initialState = {
  typesOfModal: ''
}

export function ModalTypes (state = initialState, action) {
  switch (action.type) {
    case MODAL_TYPE:
      return {
        ...state,
        typesOfModal: action.payload
      };
    default: return state
  }
}

export default ModalTypes