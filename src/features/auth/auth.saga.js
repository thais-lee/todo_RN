import {authActions} from './auth.slice';
import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import authApi from './auth.api';

function* handleLogin(action) {
  try {
    const res = yield call(authApi.loginApi, action.payload);
    yield put({type: authActions.loginSuccess.type, payload: res});
  } catch (error) {
    yield put(authActions.loginFailed);
  }
}

export default function* authSaga() {
  yield all([takeLatest(authActions.login.type, handleLogin)]);
}
