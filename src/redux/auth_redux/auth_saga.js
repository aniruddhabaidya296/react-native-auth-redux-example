import {call, put, takeLatest} from 'redux-saga/effects';
import {USER_DETAILS} from '../config';
import * as localStorage from '../local_storage';
import {INITIALISE_APP} from './actions';
import {LOGGED_IN, LOGGED_OUT, AUTH_LOADING, AUTH_ERROR} from './events';

function* initialiseAppWorker(action) {
  console.log("initialiseAppWorker hit...");
  try {
    yield put({
      type: AUTH_LOADING,
    });
    const token = yield call(localStorage.getData, 'access-token');
    if (token != null) {
      yield put({
        type: LOGGED_IN,
      });
      USER_DETAILS.token = token;
    } else {
      yield put({
        type: LOGGED_OUT,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: AUTH_ERROR,
    });
  }
}

export function* watchInitialiseAppWorker() {
  console.log("watchInitialiseAppWorker hit...");
  yield takeLatest(INITIALISE_APP, initialiseAppWorker);
}
