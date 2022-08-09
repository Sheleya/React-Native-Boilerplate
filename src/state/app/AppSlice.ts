import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  appReady: boolean;
};

const INITIAL_STATE: AppState = {
  appReady: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    bootstrap: state => state,
    clearAppState: state => state,
    setAppReady: (state, action: PayloadAction<boolean>) => {
      state.appReady = action.payload;
    },
  },
});
