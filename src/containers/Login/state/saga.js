import { put, takeLatest } from "redux-saga/effects";
import { testAction } from "./action";
import * as types from "./type";

export function* dispatchAction() {
  yield put(types.TEST_THIS_ACTION);
  console.log("action is being dispatched");

  //call
}

export function* dispatchWatcher() {
  yield takeLatest(testAction, dispatchAction);
}
