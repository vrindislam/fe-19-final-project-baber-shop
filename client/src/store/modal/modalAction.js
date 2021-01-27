import {SHOW_MODAL, HIDE_MODAL} from '../actionTypes'

export const showModal = () => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    payload: true
  })
}

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL,
    payload: false
  })
}

// import {SHOW_REGISTER_MODAL, HIDE_REGISTER_MODAL} from '../actionTypes'
//
// export const showRegisterModal = () => dispatch => {
//   dispatch({
//     type: SHOW_REGISTER_MODAL,
//     payload: true
//   })
// }
//
// export const hideRegisterModal = () => dispatch => {
//   dispatch({
//     type: HIDE_REGISTER_MODAL,
//     payload: false
//   })
// }