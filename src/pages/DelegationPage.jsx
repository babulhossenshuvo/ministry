import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Mail, Phone, X } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';
import DelegationCard from '../components/shared/DelegationCard';
import Modal from '../components/ui/Modal';
import { delegationData } from '../data/delegationData';

const CATEGORIES = ['All Members', 'Ministry Officials', 'UN Specialists', 'Technical Advisors', 'Support Staff'];

export default function DelegationPage() {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('All Members');
    const [search, setSearch] = useState('');
    const [selectedMember, setSelectedMember] = useState(null);

    const filtered = delegationData.filter(m => {
        const matchesCat = filter === 'All Members' || m.category === filter;
        const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.title.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <PageWrapper>
            {/* Premium Page Header */}
            <section style={{
                minHeight: '300px',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary-dark) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("/UN at Dr.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                    zIndex: 0,
                    opacity: 0.45,
                    mixBlendMode: 'luminosity'
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,25,20,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,25,20,0.95) 100%)', zIndex: 1 }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,106,78,0.5) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none', mixBlendMode: 'screen' }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', fontWeight: 800, margin: '0 0 1rem', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        {t('delegation.page_title')}
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                        <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-gold-light)', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {t('delegation.session')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    {/* Filter Bar */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
                        {/* Search */}
                        <div style={{ position: 'relative', flexGrow: 1, minWidth: '200px', maxWidth: '280px' }}>
                            <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder={t('delegation.search_placeholder')}
                                className="form-input"
                                aria-label={t('delegation.search_placeholder')}
                                style={{ paddingLeft: '2.25rem', height: '40px', padding: '0.5rem 0.75rem 0.5rem 2.25rem' }}
                            />
                        </div>
                        {/* Category filters */}
                        <div role="group" aria-label="Filter delegation by category" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    style={{
                                        padding: '0.4rem 1rem',
                                        borderRadius: 'var(--radius-full)',
                                        border: '2px solid',
                                        borderColor: filter === cat ? 'var(--color-primary)' : 'var(--color-border)',
                                        background: filter === cat ? 'var(--color-primary)' : 'transparent',
                                        color: filter === cat ? 'white' : 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-ui)',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Delegation Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {filtered.map((member, i) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <DelegationCard
                                    {...member}
                                    onClick={() => setSelectedMember(member)}
                                />
                            </motion.div>
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-ui)' }}>
                            No delegation members found matching your criteria.
                        </div>
                    )}
                </div>
            </section>

            {/* Member Profile Modal */}
            <Modal
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                title={selectedMember?.name || ''}
            >
                {selectedMember && (
                    <div>
                        {/* Avatar */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '3px solid var(--color-gold-light)' }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.75rem', color: 'white' }}>
                                    {selectedMember.name.split(' ').filter(w => w.match(/[A-Z]/)).map(w => w[0]).join('').slice(0, 2)}
                                </span>
                            </div>
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 0.25rem' }}>
                                    {selectedMember.name}
                                </h3>
                                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: '0 0 0.25rem' }}>{selectedMember.title}</p>
                                <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>{selectedMember.department}</span>
                            </div>
                        </div>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '0 0 1.25rem' }} />
                        <h4 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
                            Biography
                        </h4>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                            {/* PLACEHOLDER — Replace before production */}
                            {selectedMember.bio}
                        </p>
                        <div style={{ background: 'var(--color-primary-muted)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
                            <h4 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                                Contact Information
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                                <Mail size={14} color="var(--color-primary)" />
                                <a href={`mailto:${selectedMember.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                                    {selectedMember.email}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </PageWrapper>
    );
}
