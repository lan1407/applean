import {USERS} from '../store';
import {takeLatest} from 'redux-saga/effects';
export default function* authSagas() {
  yield takeLatest(USERS.LOGIN.HANDLER, loginSaga);
}

function* loginSaga({payload, type}) {
  const {email, password} = payload || {};
  yield takeLatest(type.LOGIN_USER, loginSaga);
    
}
