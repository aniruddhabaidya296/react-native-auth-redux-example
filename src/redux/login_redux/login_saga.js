import { LOGIN, LOGOUT } from "./events";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi } from "./login_services";
import * as localStorage from "../local_storage";
import { LOGGED_OUT } from "../auth_redux/events";
import { USER_DETAILS } from "../config";

function* createLoginWorker(action) {
  try {
    const res = yield call(loginApi, action.payload);
    console.log(res["data"]["data"]["access-token"]);
    if (res["data"]["data"]["access-token"] != null) {
      console.log("Yielding onSuccess...");
      USER_DETAILS.token = res["data"]["data"]["access-token"];
      yield call(localStorage.storeData, {
        key: "access-token",
        value: USER_DETAILS.token
      });
      yield action.onSuccess();
    } else {
      console.log(res["data"]["message"]);
    }
  } catch (error) {
    console.log(error);
    yield action.onError("Something Went Wrong");
  }
}

function* logoutWoker(action) {
  try {
    console.log("Logging out..",action);
    const res = yield call(localStorage.clearData);
    yield put({
      type: LOGGED_OUT
    });
    USER_DETAILS.id = null;
    USER_DETAILS.phoneNumber = null;
    USER_DETAILS.token = null;
  } catch (error) {
    console.log(error);
    yield action.onError("Something went wrong please try again");
  }
}

export function* watchLoginWorker() {
  yield takeLatest(LOGIN, createLoginWorker);
}

export function* watchLogoutWorker() {
  console.log("logoutWorker hit...");
  yield takeLatest(LOGOUT, logoutWoker);
}
