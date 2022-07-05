import {authActions, selectAccessToken} from './auth.slice';
import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import authApi from './auth.api';

function* handleLogin(action) {
  console.log('action login', action);
  try {
    const res = yield call(authApi.loginApi, action.payload);
    console.log('here');
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
    yield put({type: authActions.getUserInfoFailed.type});
  }
}

function* handleRegister(action) {
  try {
    yield call(authApi.registerApi, action.payload);

    const res = yield call(authApi.loginApi, {
      userEmail: action.payload.emailAddress,
      userPassword: action.payload.password,
    });
    console.log('res', res);
    yield put({type: authActions.registerSuccess.type, payload: res});
  } catch (error) {
    console.log('saga', 'error here');

    yield put({type: authActions.registerFailed.type});
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.login.type, handleLogin),
    takeLatest(authActions.getUserInfo.type, handleGetMe),
    takeLatest(authActions.register.type, handleRegister),
  ]);
}
