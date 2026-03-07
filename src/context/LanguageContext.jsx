import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

const LANGUAGES = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', dir: 'ltr' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', dir: 'ltr' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', dir: 'ltr' },
];

export function LanguageProvider({ children }) {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(
        localStorage.getItem('bd_portal_lang') || 'en'
    );

    const currentLangData = LANGUAGES.find((l) => l.code === currentLanguage) || LANGUAGES[0];
    const isRTL = currentLangData.dir === 'rtl';
    const dir = currentLangData.dir;

    useEffect(() => {
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', currentLanguage);
    }, [currentLanguage, dir]);

    const changeLanguage = (code) => {
        const lang = LANGUAGES.find((l) => l.code === code);
        if (!lang) return;
        i18n.changeLanguage(code);
        setCurrentLanguage(code);
        localStorage.setItem('bd_portal_lang', code);
        document.documentElement.setAttribute('dir', lang.dir);
        document.documentElement.setAttribute('lang', code);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage, isRTL, dir, languages: LANGUAGES, currentLangData }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

export { LANGUAGES };
export default LanguageContext;
