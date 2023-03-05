import { call, put, takeLatest } from "redux-saga/effects";
import { getGithubRepos } from "./getGithubRepos";
import { fetchGithubRepos, setData } from "./repos/reposSlice";

function* fetchReposHandler() {
  try {
    const repos = yield call(getGithubRepos);
    yield put(setData(repos));
  } catch (error) {
    yield call(console.error, "Coś poszło nie tak");
  }
}

export function* reposSaga() {
  yield takeLatest(fetchGithubRepos.type, fetchReposHandler);
}
