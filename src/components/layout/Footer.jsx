import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
import { Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';
import { secretaryData } from '../../data/secretaryData';

export default function Footer() {
    const { t } = useTranslation();
    const { changeLanguage, languages, currentLanguage } = useLanguage();

    return (
        <footer style={{ background: 'var(--color-navy)', color: 'white' }} role="contentinfo">
            {/* Logo Strip */}
            <div style={{ background: 'var(--color-primary-dark)', padding: '1.5rem' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/logos/bd-govt.png" alt="Bangladesh" style={{ height: '48px', width: 'auto' }} />
                        <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2)' }} />
                        <img src="/logos/Logo_of_the_United_Nations.svg" alt="United Nations" style={{ height: '44px', width: 'auto' }} />
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div style={{ padding: '3rem 1.5rem' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {/* Column 1 - About */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <img src="/logos/bd-govt.png" alt="" style={{ height: '32px', opacity: 0.8 }} />
                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem' }}>Bangladesh UN Portal</span>
                        </div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                            {t('footer.description')}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                { icon: Facebook, url: secretaryData.facebook, label: 'Facebook' },
                                { icon: Youtube, url: secretaryData.youtube, label: 'YouTube' },
                                { icon: Twitter, url: secretaryData.twitter, label: 'X' },
                                { icon: Linkedin, url: secretaryData.linkedin, label: 'LinkedIn' }
                            ].map((soc, idx) => (
                                <a
                                    key={idx}
                                    href={soc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={soc.label}
                                    style={{ color: 'rgba(255,255,255,0.6)', transition: 'all 0.3s' }}
                                    onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'}
                                    onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                >
                                    <soc.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                            {t('footer.quick_links')}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                { to: '/', label: t('nav.home') },
                                { to: '/secretary', label: t('nav.secretary') },
                                { to: '/mission', label: t('nav.mission') },
                                { to: '/delegation', label: t('nav.delegation') },
                                { to: '/contributions', label: t('nav.contributions') },
                                { to: '/news', label: t('nav.news') },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                                        onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                            {t('footer.contact_info')}
                        </h3>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                            <p style={{ fontWeight: 600, color: 'white', marginBottom: '0.25rem' }}>Bangladesh Permanent Mission to the UN</p>
                            <p>820 Second Avenue, Suite 502<br />New York, NY 10017<br />USA</p>
                            <p style={{ marginTop: '0.5rem' }}>Tel: +1 212 867 3434</p>
                            <p>Email: mission@un.mofa.gov.bd</p>
                        </div>
                    </div>

                    {/* Column 4 - Language */}
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                            {t('footer.language')}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    style={{
                                        background: currentLanguage === lang.code ? 'var(--color-primary)' : 'transparent',
                                        border: '1px solid',
                                        borderColor: currentLanguage === lang.code ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: currentLanguage === lang.code ? 'white' : 'rgba(255,255,255,0.7)',
                                        padding: '0.3rem 0.75rem',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-ui)',
                                        fontSize: '0.8rem',
                                        textAlign: 'left',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {lang.flag} {lang.nativeName}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Bar */}
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem 1.5rem' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                        {t('footer.copyright')}
                    </p>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
                        {t('footer.disclaimer')}
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {[t('footer.privacy'), t('footer.accessibility'), t('footer.terms')].map((item) => (
                            <a key={item} href="#" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                                onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
