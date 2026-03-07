import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import { motion } from 'framer-motion';

const navLinks = [
    { to: '/', key: 'nav.home', exact: true },
    { to: '/mission', key: 'nav.mission' },
    { to: '/contributions', key: 'nav.contributions' },
    { to: '/news', key: 'nav.news' },
    { to: '/contact', key: 'nav.contact' },
    { to: '/about', key: 'nav.about' },
];

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
                    background: isScrolled ? 'rgba(0, 30, 20, 0.95)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(14px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(200,169,81,0.15)' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
                    height: isScrolled ? '70px' : '90px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 2rem',
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo/Brand */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                            <img src="/logos/bd-govt.png" alt="Bangladesh Government" style={{ height: isScrolled ? '38px' : '46px', width: 'auto', transition: 'height 0.3s' }} />
                            <div>
                                <p style={{
                                    margin: 0,
                                    fontSize: isScrolled ? '1rem' : '1.15rem',
                                    fontWeight: 800,
                                    color: 'white',
                                    fontFamily: 'var(--font-display)',
                                    letterSpacing: '-0.01em',
                                    lineHeight: 1.1,
                                    transition: 'all 0.3s'
                                }}>
                                    Dr. Khalilur Rahman
                                </p>
                                <p style={{
                                    margin: 0,
                                    fontSize: '0.65rem',
                                    fontWeight: 600,
                                    color: 'var(--color-gold-light)',
                                    fontFamily: 'var(--font-ui)',
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    lineHeight: 1.2,
                                    transition: 'all 0.3s'
                                }}>
                                    Foreign Minister · Bangladesh
                                </p>
                            </div>
                        </Link>
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
                                    color: isActive ? 'var(--color-gold)' : 'rgba(255,255,255,0.88)',
                                    textDecoration: 'none',
                                    padding: '0.5rem 0.85rem',
                                    borderBottom: isActive ? '2px solid var(--color-gold)' : '2px solid transparent',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    letterSpacing: '0.04em',
                                    whiteSpace: 'nowrap',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
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
                                border: '1px solid rgba(255,255,255,0.25)',
                                borderRadius: 'var(--radius-md)',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.3s',
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
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'none', padding: '0.25rem' }}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div
                    style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.7)' }}
                    onClick={() => setMobileOpen(false)}
                >
                    <nav
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '280px',
                            height: '100%',
                            background: 'var(--color-primary-dark)',
                            padding: '1.5rem',
                            overflowY: 'auto',
                            boxShadow: 'var(--shadow-xl)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <img src="/logos/bd-govt.png" alt="" style={{ height: '36px' }} />
                                <div>
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'white', display: 'block', lineHeight: 1.1 }}>Dr. Khalilur Rahman</span>
                                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Foreign Minister</span>
                                </div>
                            </div>
                            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
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
                                        color: isActive ? 'var(--color-gold)' : 'rgba(255,255,255,0.85)',
                                        textDecoration: 'none',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius-md)',
                                        background: isActive ? 'rgba(200,169,81,0.1)' : 'transparent',
                                        display: 'block',
                                        borderLeft: isActive ? '3px solid var(--color-gold)' : '3px solid transparent',
                                    })}
                                >
                                    {t(link.key)}
                                </NavLink>
                            ))}
                        </div>
                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
