// Global imports
import { initReactI18next } from 'react-i18next';
import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { convertLanguageJsonToObject } from './translations';

// #region Local imports
import vi from './locales/vi/common.json';
import en from './locales/vi/common.json';
// #endregion Local imports
export const defaultNS = 'common';

export const translationsJson = {
  en: {
    common: en,
  },
  vi: {
    common: vi,
  },
};

convertLanguageJsonToObject(en);

const languageDetector: LanguageDetectorAsyncModule = {
  async: true,
  type: 'languageDetector',
  detect: (cb: Function) => cb('vi'),
  init: () => {},
  cacheUserLanguage: (lng) => {
    console.log(lng);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    debug: true,
    resources: translationsJson,
    ns: [defaultNS],
    defaultNS: defaultNS,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
