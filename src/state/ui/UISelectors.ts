import { OnSync } from '@state/ui/UITypes';
import { RootState } from '@state/reducers';

const createGetOnSync = (key: OnSync) => (state: RootState) =>
  state.ui.onSync[key];

export const getOnSync = {
  global: createGetOnSync(OnSync.Global),
};
