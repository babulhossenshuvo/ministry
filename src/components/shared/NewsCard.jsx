import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

const categoryColors = {
    press: { bg: '#EBF5FB', color: '#1A6A9A', label: 'Press Release' },
    statement: { bg: '#E8F5F0', color: '#006A4E', label: 'Statement' },
    media: { bg: '#FEF9E7', color: '#A04000', label: 'Media Coverage' },
    event: { bg: '#F5EEF8', color: '#76448A', label: 'Event' },
};

export default function NewsCard({ title, date, category, excerpt, link = '#' }) {
    const { t } = useTranslation();
    const cat = categoryColors[category] || categoryColors.press;

    return (
        <article
            className="card-base"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
            {/* Category color bar */}
            <div style={{ height: '4px', background: cat.color }} />
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Category badge + date */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ background: cat.bg, color: cat.color, padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {cat.label}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        <Calendar size={12} />
                        {formatDate(date)}
                    </span>
                </div>
                {/* Title */}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 0.75rem', lineHeight: 1.4 }}>
                    {title}
                </h3>
                {/* Excerpt */}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {excerpt}
                </p>
                {/* Read More */}
                <a
                    href={link}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.25rem', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'none', transition: 'gap 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.gap = '0.6rem'}
                    onMouseOut={e => e.currentTarget.style.gap = '0.35rem'}
                >
                    {t('common.read_more')} <ArrowRight size={14} />
                </a>
            </div>
        </article>
    );
}
