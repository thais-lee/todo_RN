import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  isLoggedIn: false,
  currentUser: undefined,

  isPendingLoggedIn: false,
  isPendingRegister: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
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
  },
});

export const authActions = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsPendingLoggedIn = state => state.auth.isPendingLoggedIn;

export default authSlice.reducer;
