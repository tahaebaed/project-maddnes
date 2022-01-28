import { types } from './types';

export const loginWithGoogle = () => ({
  type: types.LOGIN_REQUEST,
});
export const loginWithGoogleRes = user => ({
  type: types.LOGIN_REQUEST,
  user,
});
export const loginFailure = error => ({
  type: types.LOGIN_FAILED,
  error,
});

export const logout = () => ({
  type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCSES,
});

export const logoutFailure = error => ({
  type: types.LOGOUT_FAILED,
  error,
});
