import {USER_AUTH_STATUS} from "./actionTypesUser";

const initialValue = {
  isAuthenticated: false,
  exp: null,
  firstName: '',
  lastName: '',
  id: '',
  isAdmin: false,
}

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case USER_AUTH_STATUS:
      return action.payload.isAuthenticated ? action.payload : initialValue;
    default:
      return state
  }
}

export default userReducer
