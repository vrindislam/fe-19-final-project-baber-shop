import { MODAL_TYPE } from './actionsTypes'

export const showMeModalINeed = (myModal) => dispatch => {
  dispatch ({
    type: MODAL_TYPE,
    payload: myModal
  })
}