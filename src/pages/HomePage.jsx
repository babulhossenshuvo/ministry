import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, Globe, Users, Award, Phone, ArrowRight, Linkedin, Twitter, Facebook, Youtube, CheckCircle } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import NewsCard from '../components/shared/NewsCard';
import SectionHeader from '../components/shared/SectionHeader';
import { newsData } from '../data/newsData';
import { secretaryData } from '../data/secretaryData';
import { timelineData } from '../data/timelineData';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const quickTiles = [
    { icon: Globe, key: 'tile_mission', to: '/mission', desc: 'Mission, vision & UN engagement framework' },
    { icon: Users, key: 'tile_delegation', to: '/delegation', desc: 'Official delegation members and profiles' },
    { icon: Award, key: 'tile_contributions', to: '/contributions', desc: 'Resolutions, peacekeeping & humanitarian work' },
    { icon: Phone, key: 'tile_contact', to: '/contact', desc: 'Contact the Mission and Ministry' },
];

const socialLinks = [
    { icon: Facebook, url: secretaryData.facebook, label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, url: secretaryData.twitter, label: 'X / Twitter', color: '#1DA1F2' },
    { icon: Linkedin, url: secretaryData.linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Youtube, url: secretaryData.youtube, label: 'YouTube', color: '#FF0000' },
];

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {/* ═══════════════ HERO — Dark Portrait + Bio ═══════════════ */}
            <section
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #002B20 60%, var(--color-navy) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background portal image */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/Portal_Image_DN_73.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.12,
                    zIndex: 0
                }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,40,25,0.7) 50%, rgba(0,0,0,0.6) 100%)', zIndex: 1 }} />
                {/* Pattern */}
                <div className="hero-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15, zIndex: 1 }} />
                {/* Radial glow */}
                <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,81,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: '1280px', padding: '8rem 2rem 5rem' }}
                >
                    {/* Top brand badge */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '1.25rem',
                            padding: '0.75rem 1.5rem',
                            background: 'rgba(255,255,255,0.07)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid rgba(200,169,81,0.25)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}>
                            <img src="/logos/bd-govt.png" alt="Bangladesh Government" style={{ height: '50px', width: 'auto' }} />
                            <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2)' }} />
                            <img src="/logos/Logo_of_the_United_Nations.svg" alt="United Nations" style={{ height: '46px', width: 'auto' }} />
                            <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2)' }} />
                            <div>
                                <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--color-gold-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Ministry of Foreign Affairs</p>
                                <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>People's Republic of Bangladesh</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Two column layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 420px) 1fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'center' }}>
                        {/* Photo column */}
                        <motion.div variants={itemVariants}>
                            <div style={{ position: 'relative', maxWidth: '420px' }}>
                                <div style={{
                                    borderRadius: 'var(--radius-xl)',
                                    overflow: 'hidden',
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                                    border: '3px solid rgba(200,169,81,0.3)',
                                    aspectRatio: '4/5',
                                    position: 'relative'
                                }}>
                                    <img
                                        src="/Dr. Khalilur Rahman.jpeg"
                                        alt="Dr. Khalilur Rahman"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                        onError={(e) => { e.target.src = '/Khalilur_Rahman_(economist)_2025.jpg'; }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }} />
                                </div>
                                {/* Gold accent badge */}
                                <div style={{
                                    position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)',
                                    background: 'var(--color-gold)',
                                    color: 'var(--color-primary-dark)',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: '0.75rem',
                                    whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.1em',
                                    boxShadow: '0 8px 20px rgba(200,169,81,0.4)'
                                }}>
                                    Foreign Minister · Bangladesh
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio column */}
                        <motion.div variants={itemVariants} style={{ paddingTop: '1rem' }}>
                            <motion.h1 variants={itemVariants} style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
                                color: 'white',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                margin: '0 0 0.5rem',
                                textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                            }}>
                                Dr. Khalilur Rahman
                            </motion.h1>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1rem 0 2rem' }}>
                                <div style={{ width: '40px', height: '3px', background: 'var(--color-gold)' }} />
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--color-gold-light)', fontWeight: 600, letterSpacing: '0.04em' }}>
                                    Sworn in 17 February 2026
                                </span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                {[
                                    'Dr. Khalilur Rahman was sworn in as the Foreign Minister of Government of Bangladesh on 17 February 2026. He previously served as National Security Adviser and High Representative for the Rohingya Issue in the Interim Government of Bangladesh.',
                                    'He joined diplomatic service in 1979, securing first position in the first Bangladesh Civil Service examination. During 1980–83, he studied at the Fletcher School of Law and Diplomacy (Tufts) and the Kennedy School of Government (Harvard), earning a PhD in Economics.',
                                    'During 1983–1991, he served at the Ministry of Foreign Affairs and Bangladesh Permanent Mission to the UN. He was spokesperson of the Least Developed Countries (LDCs) and aide to the President of the 41st session of the UN General Assembly.',
                                ].map((p, i) => (
                                    <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, margin: 0 }}>{p}</p>
                                ))}
                            </div>

                            {/* Social links */}
                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                {socialLinks.map((soc, idx) => (
                                    <a
                                        key={idx}
                                        href={soc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={soc.label}
                                        title={soc.label}
                                        style={{
                                            width: '44px', height: '44px',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid rgba(255,255,255,0.25)',
                                            background: 'rgba(255,255,255,0.07)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', textDecoration: 'none',
                                            transition: 'all 0.25s',
                                            backdropFilter: 'blur(6px)',
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.background = soc.color;
                                            e.currentTarget.style.borderColor = soc.color;
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                            e.currentTarget.style.boxShadow = `0 8px 20px rgba(0,0,0,0.3)`;
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <soc.icon size={18} />
                                    </a>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/secretary" className="btn btn-gold" style={{ padding: '0.875rem 2.25rem', fontSize: '0.9rem' }}>
                                    Full Profile &amp; Biography
                                </Link>
                                <Link to="/mission" className="btn btn-outline-white" style={{ padding: '0.875rem 2.25rem', fontSize: '0.9rem', backdropFilter: 'blur(5px)' }}>
                                    Our UN Mission
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', zIndex: 3 }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
                    <ChevronDown size={20} />
                </motion.div>
            </section>

            {/* ═══════════════ EXTENDED BIO (UN Career) ═══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <SectionHeader title="Career at the United Nations" subtitle="1991 – 2016" />
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                                Dr. Rahman joined the United Nations secretariat in 1991 as Special Adviser at the UN Conference on Trade and Development (UNCTAD) in Geneva. During the ensuing 25 years at the UN, he held senior positions in New York and Geneva, and was a lead author of and substantive contributor to major UN flagship publications.
                            </p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                                Dr. Rahman is a founder of the East West University in Dhaka and served as a member on its Board of Trustees until November 2024 when he was appointed as the High Representative on the Rohingya Issue, and subsequently as National Security Adviser.
                            </p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                                He is married and has two daughters and four grandchildren.
                            </p>
                        </div>

                        {/* Key milestones */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <SectionHeader title="Key Milestones" subtitle="Achievements" />
                            {secretaryData.achievements.slice(0, 4).map((ach, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.09 }}
                                    style={{
                                        display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                        background: 'white', padding: '1.25rem',
                                        borderRadius: 'var(--radius-lg)',
                                        borderLeft: '4px solid var(--color-gold)',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}
                                >
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1, flexShrink: 0 }}>{ach.number}</div>
                                    <div>
                                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-dark)', margin: '0 0 0.35rem' }}>{ach.title}</h3>
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{ach.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <Link to="/secretary" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}>
                                See All Milestones <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CAREER TIMELINE STRIP ═══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-primary-dark)' }}>
                <div className="container-main">
                    <SectionHeader title="Career Journey" subtitle="Timeline" light centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
                        {timelineData.slice(0, 4).map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(200,169,81,0.2)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '1.5rem',
                                }}
                            >
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.year}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'white', margin: '0 0 0.4rem', lineHeight: 1.3 }}>{item.role}</h3>
                                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.organization}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/secretary" className="btn btn-gold" style={{ padding: '0.875rem 2.5rem' }}>
                            View Full Career Timeline
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SPOTLIGHT (Bangladesh) ═══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <SectionHeader title="Bangladesh — Our Nation" subtitle="Video Spotlight" />
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                A glimpse into the beauty, culture, and resilience of Bangladesh — the nation Dr. Khalilur Rahman represents on the world stage as Foreign Minister.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {secretaryData.mandate.slice(0, 4).map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <CheckCircle size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid white', aspectRatio: '16/9', position: 'relative', background: '#000' }}>
                            <iframe
                                src="https://www.youtube.com/embed/xy2kRkcn-rc?rel=0&showinfo=0"
                                title="Bangladesh — Our Nation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ QUICK ACCESS TILES ═══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('home.quick_access_title')} subtitle="Explore" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {quickTiles.map((tile, i) => {
                            const Icon = tile.icon;
                            return (
                                <motion.div
                                    key={tile.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                >
                                    <Link to={tile.to} style={{ textDecoration: 'none', display: 'block' }}>
                                        <div
                                            className="card-base"
                                            style={{ padding: '2rem 1.5rem', textAlign: 'center', border: '2px solid transparent', transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s' }}
                                            onMouseOver={e => {
                                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                            }}
                                            onMouseOut={e => {
                                                e.currentTarget.style.borderColor = 'transparent';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                            }}
                                        >
                                            <div style={{ width: '52px', height: '52px', background: 'var(--color-primary-muted)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                                                <Icon size={24} color="var(--color-primary)" />
                                            </div>
                                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 0.5rem' }}>
                                                {t(`home.${tile.key}`)}
                                            </h3>
                                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: '0 0 1rem', lineHeight: 1.5 }}>
                                                {tile.desc}
                                            </p>
                                            <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                                                {t('common.learn_more')} <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FEATURED NEWS ═══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <SectionHeader title={t('home.news_heading')} subtitle="Latest" />
                        <Link to="/news" className="btn btn-primary" style={{ flexShrink: 0 }}>
                            {t('home.view_all_news')}
                        </Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {newsData.slice(0, 3).map((news) => (
                            <motion.div
                                key={news.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <NewsCard title={news.title} date={news.date} category={news.category} excerpt={news.excerpt} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ PEACEKEEPING BANNER ═══════════════ */}
            <section
                style={{
                    background: 'var(--color-primary)',
                    padding: '5rem 1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(200,169,81,0.04) 0px, rgba(200,169,81,0.04) 2px, transparent 2px, transparent 40px)',
                    pointerEvents: 'none',
                }} />
                <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>UN Peacekeeping</span>
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'white', fontWeight: 800, margin: '0 0 1.5rem', lineHeight: 1.25 }}>
                                Bangladesh — A Global Force for Peace
                            </h2>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '3rem' }}>
                                {t('home.peacekeeping_subtext')}
                            </p>
                        </motion.div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
                            {[
                                { value: '6,800', suffix: '+', label: 'Troops Deployed' },
                                { value: '12', suffix: '', label: 'Active Missions' },
                                { value: '9', suffix: '', label: 'Countries' },
                                { value: '40', suffix: '+', label: 'Years of Service' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1 }}>
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
