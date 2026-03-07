import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function SplashScreen() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(() => !sessionStorage.getItem('splash_shown'));

    useEffect(() => {
        if (!visible) return;
        const timer = setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem('splash_shown', 'true');
        }, 2500);
        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: 'var(--color-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.5rem',
                    }}
                    aria-live="polite"
                    aria-label="Loading page"
                >
                    <motion.img
                        src="/logos/bd-govt.png"
                        alt="Bangladesh"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        style={{ width: '100px', height: '100px' }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h1 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '1.5rem', fontWeight: 700, margin: 0, marginBottom: '0.5rem' }}>
                            {t('secretary.ministry')}
                        </h1>
                        <p style={{ fontFamily: 'var(--font-ui)', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0, letterSpacing: '0.05em' }}>
                            {t('about.official_name')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <div style={{ display: 'flex', gap: '6px' }}>
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}
                                />
                            ))}
                        </div>
                        <span style={{ fontFamily: 'var(--font-ui)', color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>
                            {t('splash.loading')}
                        </span>
                    </motion.div>
                    {/* Gold decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                        style={{ position: 'absolute', bottom: '2rem', width: '120px', height: '2px', background: 'var(--color-gold)', transformOrigin: 'center' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
