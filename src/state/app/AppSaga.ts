import { call, put, takeLatest } from 'typed-redux-saga';
import { actions } from '../actions';

function* bootstrap() {
  yield* call(setAppReady);
}

function* setAppReady() {
  yield* put(actions.app.setAppReady(true));
}

export function* appSaga() {
  yield* takeLatest(actions.app.bootstrap.type, bootstrap);
}
