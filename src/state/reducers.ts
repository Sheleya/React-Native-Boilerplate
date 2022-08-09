/* eslint-disable @typescript-eslint/no-explicit-any */
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'react';
import { storage } from '@utils/storage';

import { uiSlice, UIState } from './ui/UISlice';
import { appSlice, AppState } from './app/AppSlice';

export interface RootState {
  app: AppState;
  ui: UIState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const persist = (config: any, reducer: Reducer<any, any>) =>
  persistReducer(
    { ...config, storage, stateReconciler: autoMergeLevel2 },
    reducer,
  );

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: appSlice.reducer,
  ui: uiSlice.reducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === appSlice.actions.clearAppState.type) {
    return combinedReducer(undefined, action);
  }

  return combinedReducer(state, action);
};

export { rootReducer };
