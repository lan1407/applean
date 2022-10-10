import User from '../../models/User';

export const LOGIN = 'LOGIN';

export const login = (email, password) => {
  return {type: LOGIN, user: new User(email, password)};
};
