import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { compact } from 'lodash';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistedAppState, rootReducer } from './reducers';
import { rootSaga } from './sagas';
import { storage } from '@utils/storage';

const persistorConfig = {
  key: '@MyApp:state',
  storage,
  whitelist: [],
  blacklist: [],
};

export const configStore = (initialState?: PersistedAppState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];

  middlewares.push(sagaMiddleware);

  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;

    middlewares.push(createDebugger());
  }

  const appliedMiddleware = applyMiddleware(...middlewares);
  const enhancers = compose(...compact([appliedMiddleware]));
  const persistedReducer = persistReducer(persistorConfig, rootReducer);
  const store = createStore(persistedReducer, initialState, enhancers as any);
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
