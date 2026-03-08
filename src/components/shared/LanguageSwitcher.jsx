import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher() {
    const { currentLanguage, changeLanguage, languages, currentLangData } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleSelect = (code) => {
        changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label="Select language"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'none',
                    border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.35rem 0.65rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    color: '#ffffff',
                    transition: 'border-color 0.2s',
                }}
            >
                <span style={{ fontSize: '1rem' }}>{currentLangData.flag}</span>
                <span className="lang-label">{currentLangData.code.toUpperCase()}</span>
                <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    aria-label="Language selection"
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        right: 0,
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                        minWidth: '180px',
                        padding: '0.5rem',
                        zIndex: 300,
                        listStyle: 'none',
                        margin: 0,
                    }}
                >
                    {languages.map((lang) => (
                        <li key={lang.code}>
                            <button
                                role="option"
                                aria-selected={lang.code === currentLanguage}
                                onClick={() => handleSelect(lang.code)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    padding: '0.5rem 0.75rem',
                                    background: lang.code === currentLanguage ? 'var(--color-primary)' : 'transparent',
                                    color: lang.code === currentLanguage ? 'white' : 'var(--color-text-primary)',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: '0.875rem',
                                    fontWeight: lang.code === currentLanguage ? 700 : 400,
                                    textAlign: 'left',
                                    transition: 'background 0.15s',
                                }}
                            >
                                <span style={{ fontSize: '1.1rem' }}>{lang.flag}</span>
                                <span>{lang.nativeName}</span>
                                {lang.dir === 'rtl' && <span style={{ marginLeft: 'auto', fontSize: '0.65rem', opacity: 0.7, fontFamily: 'var(--font-ui)' }}>RTL</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
