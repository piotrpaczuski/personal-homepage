import { all } from "redux-saga/effects";
import { reposSaga } from "./features/reposSaga";

export default function* rootSaga() {
  yield all([reposSaga()]);
}
