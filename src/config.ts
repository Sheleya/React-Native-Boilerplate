import DeviceInfo from 'react-native-device-info';

const ENV = process.env.APP_ENV || 'STAGING';

const COMMON_SETTINGS = {
  BUNDLE_VERSION: process.env.BUNDLE_VERSION || DeviceInfo.getBuildNumber(),
  APP_VERSION: DeviceInfo.getVersion(),
  APP_STORE_LINK: '',
  PLAY_STORE_LINK: '',
} as const;

const configs = {
  DEVELOPMENT: {
    ...COMMON_SETTINGS,
    BASE_URL: '',
    ENV: 'DEVELOPMENT',
  },
  PRODUCTION: {
    ...COMMON_SETTINGS,
    BASE_URL: '',
    ENV: 'PRODUCTION',
  },
};

export const modifyApiUrl = (jsonUrls: string) => {
  const urls = JSON.parse(jsonUrls);

  configs.PRODUCTION.BASE_URL = urls.PRODUCTION.BASE_URL;
};

export const config = configs[ENV as keyof typeof configs];
