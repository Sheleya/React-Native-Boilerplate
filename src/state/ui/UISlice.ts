import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnSyncData } from '@typings/ui';
import { OnSync, OnSyncIndicators } from './UITypes';

export type UIState = {
  onSync: OnSyncIndicators;
};

const INITIAL_STATE: UIState = {
  onSync: {
    global: false,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    setOnSync: (state, action: PayloadAction<OnSyncData>) => {
      const { payload } = action;
      const key: OnSync = payload.subject;
      state.onSync[key] = payload.flag;
    },
  },
});
