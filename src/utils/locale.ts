import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as enJson from '@assets/locale/en.json';

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: enJson,
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: false,

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },
  react: {
    useSuspense: true,
  },
});

export enum Language {
  en = 'en',
}

export type LanguageListType = { languages: { [key: string]: string } };

export const locale = i18n;
