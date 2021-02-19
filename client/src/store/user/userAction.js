import { USER_AUTH_STATUS } from "./actionTypesUser";

export const authUser = status => dispatch => {
  return dispatch(
    {
      type: USER_AUTH_STATUS,
      payload: status
    }
  );
};
