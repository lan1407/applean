import {callLogin} from '../../requests';

export function* login({email, password}) {
  const options = {
    email: email,
    password: password,
  };

  try {
    const payload = yield call(callLogin, options);
    const {access_token} = payload;
    yield put(loginSucceeded(payload));
    localStorage.setItem('token', access_token);
  } catch (error) {
    yield put(loginFailed(error));
    localStorage.removeItem('token');
  }
}