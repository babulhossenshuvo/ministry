import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import bnTranslation from './locales/bn/translation.json';
import arTranslation from './locales/ar/translation.json';
import zhTranslation from './locales/zh/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';
import ptTranslation from './locales/pt/translation.json';

const savedLang = localStorage.getItem('bd_portal_lang') || 'en';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            bn: { translation: bnTranslation },
            ar: { translation: arTranslation },
            zh: { translation: zhTranslation },
            es: { translation: esTranslation },
            fr: { translation: frTranslation },
            pt: { translation: ptTranslation },
        },
        lng: savedLang,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'bd_portal_lang',
            caches: ['localStorage'],
        },
    });

export default i18n;
