import {USERS} from '../store';

//payload:{ callback, user, password}
export const loginSubmit = payload => ({
  type: USERS.LOGIN.HANDLER,
  payload,
});

export const loginSuccess = payload => ({
  type: USERS.LOGIN.SUCCESS,
  payload,
});
