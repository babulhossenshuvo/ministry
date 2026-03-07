import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, centered = false, light = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '4rem', textAlign: centered ? 'center' : 'left' }}
        >
            {subtitle && (
                <span style={{
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    display: 'block',
                    marginBottom: '0.75rem',
                }}>
                    {subtitle}
                </span>
            )}
            <h2
                className={centered ? 'section-heading-line-center' : 'section-heading-line'}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    fontWeight: 700,
                    color: light ? 'white' : 'var(--color-text-primary)',
                    margin: 0,
                }}
            >
                {title}
            </h2>
        </motion.div>
    );
}
