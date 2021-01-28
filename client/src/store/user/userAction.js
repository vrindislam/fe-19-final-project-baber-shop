import { USER_AUTH_STATUS } from './actionTypesUser';

export const authUser = (status) => ({
  type: USER_AUTH_STATUS,
  payload: status
});
