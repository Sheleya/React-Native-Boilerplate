import { fork } from 'typed-redux-saga';
import { uiSaga } from '@state/ui/UISaga';
import { appSaga } from '@state/app/AppSaga';

export function* rootSaga() {
  yield* fork(uiSaga);
  yield* fork(appSaga);
}
