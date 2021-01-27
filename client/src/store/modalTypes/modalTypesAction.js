import { REGISTRATION_FORM_MODAL, LOGIN_FORM_MODAL } from '../actionTypes'

export const showRegistrationModal = () => dispatch => {
  dispatch ({
    type: REGISTRATION_FORM_MODAL,
    payload: 'RegistrationForm'
  })
}

export const showLoginModal = () => dispatch => {
  dispatch ({
    type: LOGIN_FORM_MODAL,
    payload: 'LoginForm'
  })
}