import {USER_AUTH_STATUS} from "./actionTypesUser";

const initialValue = {
  isAuthenticated: false,
}

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case USER_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
