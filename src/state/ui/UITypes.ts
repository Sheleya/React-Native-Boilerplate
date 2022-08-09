export type OnSyncIndicators = {
  [subject in OnSync]: boolean;
};

export enum OnSync {
  Global = 'global',
}
