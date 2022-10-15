import { takeEvery, all } from 'redux-saga/effects';
const sagas = function*() {
  yield all([takeEvery('HANDLE_LOGIN')]);
};
export default sagas;