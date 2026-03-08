import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Linkedin, Twitter, Facebook, Youtube, CheckCircle, FileText, Mic, BookOpen } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';
import TimelineItem from '../components/shared/TimelineItem';
import { secretaryData } from '../data/secretaryData';
import { timelineData } from '../data/timelineData';
import { formatDate } from '../utils/formatDate';

const TABS = [
    { id: 'un_speeches', labelKey: 'tab_un_speeches', icon: Mic },
    { id: 'policy', labelKey: 'tab_policy', icon: FileText },
    { id: 'publications', labelKey: 'tab_publications', icon: BookOpen },
];

export default function SecretaryPage() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('un_speeches');
    const speeches = secretaryData.speeches.filter(s => s.type === activeTab);

    return (
        <PageWrapper>
            {/* Section 1 — Portrait & Identity */}
            <section className="section-padding" style={{
                background: 'var(--color-primary-dark)',
                position: 'relative',
                overflow: 'hidden',
                padding: '140px 0 8rem',
                minHeight: '750px',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Background Video for Hero */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.35,
                        zIndex: 0,
                    }}
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-global-network-connection-background-44163-large.mp4" type="video/mp4" />
                </video>
                {/* Hero Overlay for Depth */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)', zIndex: 1 }} />
                <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: 'clamp(2rem, 8vw, 6rem)',
                        alignItems: 'center'
                    }}>
                        {/* Portrait */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <div style={{ position: 'relative', maxWidth: '440px', margin: '0 auto' }}>
                                <div style={{
                                    aspectRatio: '4/5',
                                    background: 'var(--color-ivory-dark)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src="/UN at Dr.webp"
                                        alt="Dr. Khalilur Rahman, Foreign Minister of Bangladesh"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                        onError={(e) => { e.target.src = '/Khalilur_Rahman_(economist)_2025.jpg'; }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%)' }} />
                                </div>
                                {/* Extreme Glass Emblem Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-15px',
                                    right: '-15px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(15px) saturate(150%)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '0.75rem 1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    zIndex: 2
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Identity</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                            <img src="/logos/bd-govt.png" alt="BD" style={{ height: '28px', width: 'auto' }} />
                                            <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.2)' }} />
                                            <img src="/UN.png" alt="UN" style={{ height: '22px', width: 'auto' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                    Ministry of Foreign Affairs, Bangladesh
                                </span>
                            </div>
                            <h1 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: 800,
                                color: 'white',
                                margin: '0 0 1rem',
                                lineHeight: 1,
                                letterSpacing: '-0.02em',
                                textShadow: '0 10px 30px rgba(0,0,0,0.4)'
                            }}>
                                {secretaryData.name}
                            </h1>
                            <p style={{
                                fontFamily: 'var(--font-ui)',
                                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                                color: 'var(--color-gold-light)',
                                fontWeight: 600,
                                margin: '0 0 1.25rem',
                                letterSpacing: '0.02em',
                                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                            }}>
                                {secretaryData.title}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', margin: '0 0 2rem', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', width: 'fit-content' }}>
                                <img src="/logos/bd-govt.png" alt="" style={{ height: '28px' }} />
                                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500, margin: 0 }}>
                                    {t('secretary.ministry')}
                                </p>
                            </div>
                            {/* Badges */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                                <span className="badge" style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>{t('secretary.badge_un')}</span>
                                <span className="badge" style={{ padding: '0.4rem 0.8rem', background: 'var(--color-gold)', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '0.85rem' }}>{t('secretary.badge_secretary')}</span>
                                <span className="badge" style={{ padding: '0.4rem 0.8rem', background: 'rgba(0,106,78,0.3)', color: 'white', border: '1px solid var(--color-primary)', fontSize: '0.85rem' }}>{t('secretary.badge_diplomat')}</span>
                            </div>
                            {/* Social Links */}
                            {/* Monochrome Social Links */}
                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
                                {[
                                    { icon: Linkedin, url: secretaryData.linkedin, label: 'LinkedIn' },
                                    { icon: Twitter, url: secretaryData.twitter, label: 'X' },
                                    { icon: Facebook, url: secretaryData.facebook, label: 'Facebook' },
                                    { icon: Youtube, url: secretaryData.youtube, label: 'YouTube' }
                                ].map((soc, idx) => (
                                    <a
                                        key={idx}
                                        href={soc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={soc.label}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            background: 'rgba(255,255,255,0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = 'white';
                                            e.currentTarget.style.color = 'var(--color-primary-dark)';
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <soc.icon size={18} />
                                    </a>
                                ))}
                            </div>
                            <a href="#" className="btn btn-primary" download>
                                <Download size={16} /> {t('secretary.download_bio')}
                            </a>
                        </motion.div>
                    </div>
                </div >
            </section >

            {/* Gold divider */}
            < div className="container-main" > <hr className="gold-divider" /></div >

            {/* Section 2 — Biography & Vision */}
            <section className="section-padding" style={{ background: 'white', padding: '8rem 0' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(3rem, 10vw, 8rem)', alignItems: 'start' }}>
                        <div>
                            <SectionHeader title="Biography" subtitle="The Journey" />
                            {secretaryData.biography.map((para, i) => (
                                <p key={i} className={i === 0 ? 'drop-cap' : ''} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                    {para}
                                </p>
                            ))}
                        </div>
                        <div>
                            <SectionHeader title="Vision & Foreign Policy" subtitle="The Future" />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                {secretaryData.vision.map((v, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        style={{ background: 'var(--color-white)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-gold)', boxShadow: 'var(--shadow-sm)' }}
                                    >
                                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{v.title}</h3>
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Section 3 — Leadership in Action (Video) */}
            <section className="section-padding" style={{ background: 'var(--color-primary-dark)', color: 'white', padding: '8rem 0' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'clamp(3rem, 8vw, 6rem)', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                            <div style={{ aspectRatio: '16/9', background: '#000', position: 'relative' }}>
                                <iframe
                                    src="https://www.youtube.com/embed/xy2kRkcn-rc?rel=0&showinfo=0"
                                    title="Bangladesh — Our Nation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                                />
                            </div>
                        </motion.div>
                        <span style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>Video Spotlight</span>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>Bangladesh — Our Nation</h2>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            A glimpse into the beautiful landscape, culture, and people of Bangladesh — the nation Dr. Khalilur Rahman proudly represents on the world stage.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-gold" style={{ padding: '0.8rem 2rem' }}>Play Vision Video</button>
                            <button className="btn btn-outline-white" style={{ padding: '0.8rem 2rem' }}>Read Transcript</button>
                        </div>
                    </div>
                </div>
            </section >

            {/* Section 4 — Career Timeline */}
            < section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('secretary.career_timeline')} subtitle="Experience" centered />
                    {/* Timeline spine */}
                    <div style={{ position: 'relative', marginTop: '5rem', paddingBottom: '2rem' }}>
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'linear-gradient(to bottom, var(--color-gold) 0%, var(--color-primary-muted) 50%, var(--color-gold) 100%)',
                            transform: 'translateX(-50%)',
                            opacity: 0.3
                        }} />
                        {timelineData.map((item, i) => (
                            <TimelineItem key={i} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </section >

            {/* Section 5 — Diplomatic Gallery (Photos) */}
            < section className="section-padding" style={{ background: 'var(--color-white)' }}>
                <div className="container-main">
                    <SectionHeader title={t('secretary.diplomatic_gallery')} subtitle="Portfolio" centered />
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                        gap: '2rem',
                        marginTop: '4rem'
                    }}>
                        {[
                            "https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=800",
                            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
                            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
                            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
                            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                        ].map((url, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                style={{
                                    aspectRatio: '16/10',
                                    borderRadius: 'var(--radius-xl)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    border: '1px solid var(--color-border)'
                                }}
                            >
                                <img src={url} alt="Diplomatic Event" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '2rem 1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                                    <p style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontFamily: 'var(--font-ui)', fontWeight: 700, margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Strategic Summit</p>
                                    <p style={{ color: 'white', fontSize: '1rem', fontFamily: 'var(--font-display)', fontWeight: 600, margin: 0 }}>High-Level Ministerial Dialogue</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Section 4 — Achievements */}
            < section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('secretary.achievements_heading')} subtitle="Achievement Claim" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {secretaryData.achievements.map((ach, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="card-base"
                                style={{ padding: '1.75rem' }}
                            >
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-gold-light)', lineHeight: 1, marginBottom: '0.75rem' }}>
                                    {ach.number}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                                    {ach.title}
                                </h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                                    {ach.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Section 5 — Speeches & Publications */}
            < section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('secretary.speeches_heading')} subtitle="Statements" />
                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0' }}>
                        {TABS.map(tab => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                                        padding: '0.75rem 1.25rem',
                                        background: 'none',
                                        border: 'none',
                                        borderBottom: activeTab === tab.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                                        color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                        fontFamily: 'var(--font-ui)',
                                        fontWeight: 700,
                                        fontSize: '0.875rem',
                                        cursor: 'pointer',
                                        marginBottom: '-2px',
                                        transition: 'color 0.2s, border-color 0.2s',
                                    }}
                                >
                                    <Icon size={16} /> {t(`secretary.${tab.labelKey}`)}
                                </button>
                            );
                        })}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {speeches.map((speech, i) => (
                            <div key={i} style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                    {formatDate(speech.date, 'MMM d, yyyy')}
                                </span>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 0.2rem', fontSize: '0.95rem' }}>{speech.title}</p>
                                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>{speech.event}</p>
                                </div>
                                <a href="#" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
                                    <Download size={14} /> PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Section 6 — Mandate */}
            < section className="section-padding" style={{ background: 'var(--color-primary)', color: 'white' }}>
                <div className="container-main">
                    <SectionHeader title={t('secretary.mandate_heading')} subtitle="Current Role" light />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {secretaryData.mandate.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                            >
                                <CheckCircle size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.6 }}>
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
        </PageWrapper >
    );
}
