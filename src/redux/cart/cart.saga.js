import { takeLatest, call, all, put } from 'redux-saga/effects';

import { clearCart } from './cart.action';
import userActionTypes from './../user/user.types';

export function* clearCartOnUserSignOut() {
  yield put(clearCart())
}

export function* onSignOutSucess() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, clearCartOnUserSignOut)
}

export function* cartSaga() {
  yield all([
    call(onSignOutSucess)
  ])
}