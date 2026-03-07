import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import { motion } from 'framer-motion';

const navLinks = [
    { to: '/', key: 'nav.home', exact: true },
    { to: '/secretary', key: 'nav.secretary' },
    { to: '/mission', key: 'nav.mission' },
    { to: '/delegation', key: 'nav.delegation' },
    { to: '/contributions', key: 'nav.contributions' },
    { to: '/news', key: 'nav.news' },
    { to: '/contact', key: 'nav.contact' },
    { to: '/about', key: 'nav.about' },
];

// Minimalist navigation configuration

export default function Navbar() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <a href="#main-content" className="skip-nav">Skip to main content</a>
            <nav
                id="main-navbar"
                role="navigation"
                aria-label="Main navigation"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                    height: isScrolled ? '70px' : '90px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 2rem',
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: isScrolled ? '1.15rem' : '1.35rem',
                                    fontWeight: 800,
                                    color: isScrolled ? 'var(--color-primary)' : 'white',
                                    fontFamily: 'var(--font-display)',
                                    letterSpacing: '-0.01em',
                                    lineHeight: 1,
                                    textShadow: isScrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s'
                                }}>
                                    {t('nav.mission_short')}
                                </p>
                            </Link>
                            <span style={{
                                margin: '0 0.75rem',
                                width: '1px',
                                height: '1.25rem',
                                background: isScrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.3)',
                                display: 'inline-block'
                            }} />
                            <Link to="/mission" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: isScrolled ? '0.85rem' : '0.95rem',
                                    fontWeight: 700,
                                    color: isScrolled ? 'var(--color-navy)' : 'var(--color-gold-light)',
                                    fontFamily: 'var(--font-ui)',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    lineHeight: 1,
                                    transition: 'all 0.3s'
                                }}>
                                    {t('nav.un')}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.exact}
                                style={({ isActive }) => ({
                                    fontFamily: 'var(--font-ui)',
                                    fontSize: '0.78rem',
                                    fontWeight: 600,
                                    color: isActive
                                        ? (isScrolled ? 'var(--color-primary)' : 'var(--color-gold)')
                                        : (isScrolled ? 'var(--color-text-secondary)' : 'rgba(255,255,255,0.9)'),
                                    textDecoration: 'none',
                                    padding: '0.5rem 0.8rem',
                                    borderBottom: isActive
                                        ? `2px solid ${isScrolled ? 'var(--color-primary)' : 'var(--color-gold)'}`
                                        : '2px solid transparent',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    letterSpacing: '0.03em',
                                    whiteSpace: 'nowrap',
                                    textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.2)'
                                })}
                            >
                                {t(link.key)}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="hide-mobile">
                            <LanguageSwitcher />
                        </div>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark mode"
                            style={{
                                background: 'none',
                                border: isScrolled ? '1px solid var(--color-border)' : '1px solid rgba(255,255,255,0.3)',
                                borderRadius: 'var(--radius-md)',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                color: isScrolled ? 'var(--color-text-secondary)' : 'white',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.3s',
                                backdropFilter: isScrolled ? 'none' : 'blur(5px)'
                            }}
                        >
                            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>
                        {/* Mobile Hamburger */}
                        <button
                            className="show-mobile"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open navigation menu"
                            aria-expanded={mobileOpen}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: isScrolled ? 'var(--color-text-primary)' : 'white', display: 'none', padding: '0.25rem' }}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div
                    style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.5)' }}
                    onClick={() => setMobileOpen(false)}
                >
                    <nav
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '280px',
                            height: '100%',
                            background: 'var(--color-white)',
                            padding: '1.5rem',
                            overflowY: 'auto',
                            boxShadow: 'var(--shadow-xl)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Link to="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                                        {t('nav.mission_short')}
                                    </span>
                                </Link>
                                <span style={{ margin: '0 0.5rem', width: '1px', height: '1rem', background: 'rgba(0,0,0,0.1)' }} />
                                <Link to="/mission" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {t('nav.un')}
                                    </span>
                                </Link>
                            </div>
                            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)' }}>
                                <X size={24} />
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.exact}
                                    onClick={() => setMobileOpen(false)}
                                    style={({ isActive }) => ({
                                        fontFamily: 'var(--font-ui)',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                                        textDecoration: 'none',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius-md)',
                                        background: isActive ? 'var(--color-primary-muted)' : 'transparent',
                                        display: 'block',
                                    })}
                                >
                                    {t(link.key)}
                                </NavLink>
                            ))}
                        </div>
                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                            <LanguageSwitcher />
                        </div>
                    </nav>
                </div>
            )}

            <style>{`
        @media (max-width: 1023px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </>
    );
}
