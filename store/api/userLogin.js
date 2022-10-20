import utils from '~/appRedux/helpers/apiUtils';

export const signInApi = (email, password) => {
  return utils.post('/client/auth/login', {
    email,
    password,
  });
};
