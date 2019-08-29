import { all, fork } from "redux-saga/effects";
import dispatchWatcher from "../containers/Login/state/saga";

// fork all the watchers

export default function* rootSaga() {
  yield all([fork(dispatchWatcher)]);
}
