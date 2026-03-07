import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-ivory)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <img src="/logos/bangladesh-emblem.svg" alt="Bangladesh National Emblem" style={{ width: '80px', height: '80px', marginBottom: '2rem', opacity: 0.7 }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 800, color: 'var(--color-gold-light)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    404
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-text-primary)', margin: '0 0 1rem' }}>
                    {t('common.not_found')}
                </h1>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-muted)', maxWidth: '400px', lineHeight: 1.7, margin: '0 auto 2.5rem' }}>
                    {t('common.not_found_sub')}
                </p>
                <Link to="/" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                    <Home size={16} /> {t('common.return_home')}
                </Link>
                {/* Gold divider */}
                <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '3rem auto 0', borderRadius: 'var(--radius-full)' }} />
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '1.5rem' }}>
                    Ministry of Foreign Affairs, People's Republic of Bangladesh
                </p>
            </motion.div>
        </div>
    );
}
