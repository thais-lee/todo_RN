import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  isLoggedIn: false,
  currentUser: undefined,

  isPendingLoggedIn: false,
  isPendingRegister: false,
  isGettingUserInfo: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isPendingLoggedIn = true;
    },

    loginSuccess(state, action) {
      state.isPendingLoggedIn = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      console.log('login success', state.accessToken);
    },

    loginFailed(state, action) {
      state.isPendingLoggedIn = false;
      state.isLoggedIn = false;
      console.log('login failed');
    },

    logout(state, action) {
      state.accessToken = undefined;
      state.currentUser = undefined;
      state.isLoggedIn = false;
    },

    getUserInfo(state, action) {
      state.isGettingUserInfo = true;
    },

    getUserInfoSuccess(state, action) {
      state.isGettingUserInfo = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    getUserInfoFailed(state, action) {
      state.currentUser = undefined;
      state.isLoggedIn = false;
      state.isGettingUserInfo = false;
    },
  },
});

export const authActions = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsPendingLoggedIn = state => state.auth.isPendingLoggedIn;
export const selectAccessToken = state => state.auth.accessToken;
export const selectCurrentUser = state => state.auth.currentUser;
export default authSlice.reducer;
