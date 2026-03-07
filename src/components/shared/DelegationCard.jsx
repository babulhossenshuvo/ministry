import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

export default function DelegationCard({ name, title, department, category, onClick }) {
    const initials = name.split(' ').filter(w => w.match(/[A-Z]/)).map(w => w[0]).join('').slice(0, 2);

    return (
        <div
            className="card-base"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
            style={{
                padding: '1.5rem',
                cursor: 'pointer',
                borderTop: '3px solid transparent',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                textAlign: 'center',
            }}
            onMouseOver={e => {
                e.currentTarget.style.borderTopColor = 'var(--color-primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.borderTopColor = 'transparent';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Avatar */}
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '3px solid var(--color-gold-light)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'white' }}>
                    {initials || '?'}
                </span>
            </div>
            {/* Name & Title */}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 0.25rem' }}>
                {name}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: '0 0 0.75rem', lineHeight: 1.4 }}>
                {title}
            </p>
            {/* Department badge */}
            <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                {department}
            </span>
        </div>
    );
}
