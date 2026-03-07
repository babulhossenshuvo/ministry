import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineItem({ year, role, organization, description, side = 'right', index = 0 }) {
    const isLeft = side === 'left';

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="timeline-item"
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 40px 1fr',
                alignItems: 'center',
                gap: '0',
                marginBottom: '2rem',
            }}
        >
            {/* Left content */}
            <div style={{ padding: '0 2rem', textAlign: 'right', ...(isLeft ? {} : { visibility: 'hidden' }) }}>
                {isLeft && <TimelineCard year={year} role={role} organization={organization} description={description} />}
            </div>

            {/* Spine dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--color-gold)', border: '3px solid var(--color-primary)', zIndex: 1, flexShrink: 0, boxShadow: 'var(--shadow-gold)' }} />
            </div>

            {/* Right content */}
            <div style={{ padding: '0 2rem', ...(!isLeft ? {} : { visibility: 'hidden' }) }}>
                {!isLeft && <TimelineCard year={year} role={role} organization={organization} description={description} />}
            </div>
        </motion.div>
    );
}

function TimelineCard({ year, role, organization, description }) {
    return (
        <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-gold)', display: 'block', marginBottom: '0.35rem' }}>
                {year}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                {role}
            </h3>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                {organization}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {description}
            </p>
        </div>
    );
}
