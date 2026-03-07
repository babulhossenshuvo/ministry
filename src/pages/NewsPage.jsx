import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';
import NewsCard from '../components/shared/NewsCard';
import { newsData, newsCategories } from '../data/newsData';

const ITEMS_PER_PAGE = 9;

export default function NewsPage() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [page, setPage] = useState(1);

    const filtered = newsData.filter(n => {
        const matchesCat = category === 'all' || n.category === category;
        const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
    });

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return (
        <PageWrapper>
            {/* Premium Header */}
            <section style={{
                minHeight: '320px',
                background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-navy) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '110px 1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="hero-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: 800, margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        {t('news.page_title')}
                    </h1>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    {/* Filter & Search */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative', minWidth: '240px' }}>
                            <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} placeholder={t('news.search_placeholder')}
                                className="form-input" style={{ paddingLeft: '2.25rem', height: '40px', padding: '0.5rem 0.75rem 0.5rem 2.25rem' }} />
                        </div>
                        <div role="group" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                            {newsCategories.map(cat => (
                                <button key={cat.value} onClick={() => { setCategory(cat.value); setPage(1); }}
                                    style={{
                                        padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', border: '2px solid',
                                        borderColor: category === cat.value ? 'var(--color-primary)' : 'var(--color-border)',
                                        background: category === cat.value ? 'var(--color-primary)' : 'transparent',
                                        color: category === cat.value ? 'white' : 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
                                    }}
                                >{cat.label}</button>
                            ))}
                        </div>
                    </div>

                    {/* News Grid */}
                    {paginated.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                            {paginated.map((news, i) => (
                                <motion.div key={news.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                                    <NewsCard title={news.title} date={news.date} category={news.category} excerpt={news.excerpt} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-ui)' }}>
                            No articles found matching your criteria.
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'none', cursor: page === 1 ? 'not-allowed' : 'pointer', color: page === 1 ? 'var(--color-text-muted)' : 'var(--color-primary)', fontFamily: 'var(--font-ui)', fontSize: '0.875rem', fontWeight: 600 }}>
                                <ChevronLeft size={14} /> {t('news.prev_page')}
                            </button>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Page {page} of {totalPages}</span>
                            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'none', cursor: page === totalPages ? 'not-allowed' : 'pointer', color: page === totalPages ? 'var(--color-text-muted)' : 'var(--color-primary)', fontFamily: 'var(--font-ui)', fontSize: '0.875rem', fontWeight: 600 }}>
                                {t('news.next_page')} <ChevronRight size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </PageWrapper>
    );
}
