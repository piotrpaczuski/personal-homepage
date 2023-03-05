import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "../features/repos/reposSlice";
import rootSaga from "../rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);
