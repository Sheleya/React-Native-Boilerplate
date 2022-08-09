import { appSlice } from '@state/app/AppSlice';
import { uiSlice } from './ui/UISlice';

export const actions = {
  app: appSlice.actions,
  ui: uiSlice.actions,
};
