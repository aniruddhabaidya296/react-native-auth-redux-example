import { all } from "redux-saga/effects";
import { watchInitialiseAppWorker } from "./auth_redux/auth_saga";
import { watchLoginWorker, watchLogoutWorker } from "./login_redux/login_saga";

export default function* rootSaga() {
  yield all([
    watchLoginWorker(),
    watchLogoutWorker(),
    watchInitialiseAppWorker(),
  ]);
}
