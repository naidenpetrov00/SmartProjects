import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locals/en';
import { bg } from './locals/bg';
import { tr } from './locals/tr';
import { uk } from './locals/uk';
import { ru } from './locals/ru';
import { enPlaces } from './locals/enPlaces';
import { bgPlaces } from './locals/bgPlaces';
import { ruPlaces } from './locals/ruPlaces';
import { trPlaces } from './locals/trPlaces';
import { ukPlaces } from './locals/ukPlaces';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: { ...en, ...enPlaces },
  },
  bg: {
    translation: { ...bg, ...bgPlaces },
  },
  uk: {
    translation: { ...uk, ...ukPlaces },
  },
  tr: {
    translation: { ...tr, ...trPlaces },
  },
  ru: {
    translation: { ...ru, ...ruPlaces },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['bg', 'en', 'tr', 'uk', 'ru'],
    debug: true,
    resources,
    fallbackLng: 'en',
    // lng: 'bg', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
