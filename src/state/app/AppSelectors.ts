import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

export const selectAppState = (state: RootState) => state.app;

export const selectAppReadyState = createSelector(
  selectAppState,
  state => state.appReady,
);
