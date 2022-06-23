import {authActions, selectAccessToken} from './auth.slice';
import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import authApi from './auth.api';

function* handleLogin(action) {
  try {
    const res = yield call(authApi.loginApi, action.payload);
    if (res === null) {
      yield put(authActions.loginFailed);
    } else yield put({type: authActions.loginSuccess.type, payload: res});
  } catch (error) {
    yield put({type: authActions.loginFailed.type});
  }
}

function* handleGetMe() {
  try {
    const accessToken = yield select(selectAccessToken);
    const res = yield call(authApi.getMeApi, accessToken);
    yield put({type: authActions.getUserInfoSuccess.type, payload: res});
  } catch (error) {
    console.log('error, duma');
    yield put({type: authActions.getUserInfoFailed.type});
    s;
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.login.type, handleLogin),
    takeLatest(authActions.getUserInfo.type, handleGetMe),
  ]);
}
