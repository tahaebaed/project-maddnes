import { call, takeLatest, put } from '@redux-saga/core/effects';
// import * as API from './api';
import { types, types as TYPES } from './types';
import rsf from '../rsf';
import firebase from 'firebase';

export const authGoogleProvider = new firebase.auth.GoogleAuthProvider();

function* logInWithGoogle({ payload }) {
  try {
    const data = yield call(
      rsf.auth.signInWithPopup,
      authGoogleProvider,
      payload
    );
    yield put(types.loginWithGoogleRes(data));
  } catch (err) {
    console.error(err);
  }
}

export function* authSagas() {
  yield takeLatest(TYPES.LOGIN_REQUEST, logInWithGoogle);
}
