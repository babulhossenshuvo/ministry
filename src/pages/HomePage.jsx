import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, Globe, Award, Phone, ArrowRight,
    Linkedin, Twitter, Facebook, Youtube, CheckCircle,
    Play, ChevronLeft, ChevronRight
} from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import NewsCard from '../components/shared/NewsCard';
import SectionHeader from '../components/shared/SectionHeader';
import { newsData } from '../data/newsData';
import { secretaryData } from '../data/secretaryData';
import { timelineData } from '../data/timelineData';

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
    }),
};

/* ─── Data ───────────────────────────────────────────────────── */
const quickTiles = [
    { icon: Globe, key: 'tile_mission', to: '/mission', desc: 'Mission, vision & UN engagement framework' },
    { icon: Award, key: 'tile_contributions', to: '/contributions', desc: 'Resolutions, peacekeeping & humanitarian work' },
    { icon: Phone, key: 'tile_contact', to: '/contact', desc: 'Contact the Mission and Ministry' },
];

const socialLinks = [
    { icon: Facebook, url: secretaryData.facebook, label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, url: secretaryData.twitter, label: 'X / Twitter', color: '#1DA1F2' },
    { icon: Linkedin, url: secretaryData.linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Youtube, url: secretaryData.youtube, label: 'YouTube', color: '#FF0000' },
];

/* ─── Social Icon Button ─────────────────────────────────────── */
function SocialBtn({ soc, dark = false }) {
    const base = dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.12)';
    return (
        <a
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={soc.label}
            title={soc.label}
            style={{
                width: 48, height: 48,
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.22)',
                background: base,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', textDecoration: 'none',
                transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
                backdropFilter: 'blur(10px)',
            }}
            onMouseOver={e => {
                e.currentTarget.style.background = soc.color;
                e.currentTarget.style.borderColor = soc.color;
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.12)';
                e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.35)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.background = base;
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <soc.icon size={19} />
        </a>
    );
}

/* ═══════════════════════════════════════════════════════════════
   DEMO ONE — Cinematic Full-Screen Background (Portal_Image)
═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   HERO SECTION — Portrait + Biography (Style One)
═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   HERO SECTION — Portrait + Biography (Video Background)
═══════════════════════════════════════════════════════════════ */
function HeroSection() {
    return (
        <section id="demo-two" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--color-navy)' }}>
            {/* Background Video */}
            <iframe
                src="https://www.youtube.com/embed/To7HyoTkF5c?autoplay=1&mute=1&controls=0&loop=1&playlist=To7HyoTkF5c&showinfo=0&rel=0&playsinline=1"
                allow="autoplay; encrypted-media"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    height: '56.25vw',
                    minHeight: '100vh',
                    minWidth: '177.77vh',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                    opacity: 0.18 // "not more visiable"
                }}
                frameBorder="0"
            />
            {/* Overlays for dark background, brand color, and light effect */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,77,56,0.85) 0%, rgba(0,0,0,0.7) 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '50%', right: '20%', transform: 'translateY(-50%)', width: '80%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,81,0.15) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(200,169,81,0.2) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                className="hero-grid hero-grid-two hero-align-left container-main"
                style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', paddingTop: '60px' }}
            >
                {/* PHOTO ON LEFT */}
                <motion.div variants={fadeUp} custom={0}>
                    <div className="hero-img-container" style={{ position: 'relative', maxWidth: 440, margin: '0 auto' }}>
                        {/* Decorative gold ring */}
                        <div style={{ position: 'absolute', inset: -12, borderRadius: 'calc(var(--radius-xl) + 12px)', border: '2px solid rgba(200,169,81,0.25)', zIndex: 0 }} />
                        <div style={{ position: 'absolute', inset: -6, borderRadius: 'calc(var(--radius-xl) + 6px)', border: '1px solid rgba(200,169,81,0.15)', zIndex: 0 }} />
                        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', aspectRatio: '4/5', position: 'relative', zIndex: 1 }}>
                            <img
                                src="/UN at Dr.webp"
                                alt="Dr. Khalilur Rahman"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                onError={e => { e.target.src = '/Khalilur_Rahman_(economist)_2025.jpg'; }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />
                            {/* Name over photo */}
                            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--color-gold)', color: 'var(--color-primary-dark)', padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', boxShadow: '0 6px 16px rgba(200,169,81,0.4)' }}>
                                    <img src="/UN.png" alt="UN" style={{ height: 18, width: 'auto', filter: 'brightness(0.2)' }} />
                                    Foreign Minister · Bangladesh
                                </div>
                            </div>
                        </div>
                        {/* Stats chips */}
                        <div style={{ position: 'absolute', top: '1.5rem', right: '-1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', zIndex: 2 }} className="stats-chips-desktop">
                            {[{ val: '25+', label: 'Years at UN' }, { val: 'PhD', label: 'Harvard' }, { val: '1979', label: 'Diplomat' }].map((s, i) => (
                                <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(200,169,81,0.35)', borderRadius: 'var(--radius-lg)', padding: '0.75rem 0.9rem', textAlign: 'center', minWidth: 76 }}>
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-gold)' }}>{s.val}</div>
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* TEXT ON RIGHT */}
                <motion.div variants={fadeUp} custom={1} style={{ paddingTop: '2.5rem' }}>
                    {/* Ministry tag */}
                    <motion.div variants={fadeUp} custom={2} className="flex-center-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <img src="/logos/bd-govt.png" alt="" style={{ height: 42, width: 'auto', opacity: 0.95 }} />
                        <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.2)' }} />
                        <img src="/UN.png" alt="" style={{ height: 32, width: 'auto', opacity: 0.95 }} />
                        <div style={{ marginLeft: '0.5rem' }}>
                            <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 800 }}>Ministry of Foreign Affairs</p>
                            <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>People's Republic of Bangladesh</p>
                        </div>
                    </motion.div>

                    <motion.h1 variants={fadeUp} custom={3} className="hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', color: 'white', fontWeight: 900, lineHeight: 1.1, margin: '0 0 1.25rem', textShadow: '0 4px 30px rgba(0,0,0,0.5)', letterSpacing: '-0.02em' }}>
                        Dr. Khalilur Rahman
                    </motion.h1>

                    <motion.div variants={fadeUp} custom={5} className="hero-align-left mx-auto-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                        {[
                            `Dr. Khalilur Rahman was sworn in as Foreign Minister of Bangladesh on 17 February 2026. He previously served as National Security Adviser and High Representative for the Rohingya Issue.`,
                            `He joined diplomatic service in 1979, earning first place in Bangladesh's inaugural Civil Service exam. He studied at the Fletcher School (Tufts) and Kennedy School (Harvard), earning a PhD in Economics.`,
                            `From 1991–2016, he held senior positions at the United Nations in Geneva and New York. He is also a co-founder of East West University, Dhaka.`,
                        ].map((p, i) => (
                            <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, margin: 0, borderLeft: i === 0 ? '3px solid var(--color-gold)' : 'none', paddingLeft: i === 0 ? '1.25rem' : 0 }}>{p}</p>
                        ))}
                    </motion.div>

                    {/* CTAs & Socials */}
                    <div className="flex-center-mobile" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <motion.div variants={fadeUp} custom={6} style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/secretary" className="btn btn-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '0.9rem' }}>Full Profile &amp; Biography</Link>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={7} style={{ display: 'flex', gap: '0.75rem' }}>
                            {socialLinks.map((soc, i) => <SocialBtn key={i} soc={soc} dark />)}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', zIndex: 3 }}
                animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
                <ChevronDown size={20} />
            </motion.div>

            {/* Provide inline styles for mobile fixes that were in index.css for stats-chips-desktop if needed */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 900px) {
                    .stats-chips-desktop { display: none !important; }
                }
            `}} />
        </section>
    );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HOME PAGE
═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
    const { t } = useTranslation();

    return (
        <PageWrapper>

            {/* ══════════════ HERO SECTION ══════════════ */}
            <HeroSection />

            {/* ══════════════ BIO SECTION ══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <SectionHeader title="Career at the United Nations" subtitle="1991 – 2016" />
                            {[
                                'Dr. Rahman joined the United Nations secretariat in 1991 as Special Adviser at the UN Conference on Trade and Development (UNCTAD) in Geneva. During the ensuing 25 years at the UN, he held senior positions in New York and Geneva, and was a lead author of and substantive contributor to major UN flagship publications.',
                                'Dr. Rahman is a founder of the East West University in Dhaka and served as a member on its Board of Trustees until November 2024, when he was appointed as the High Representative on the Rohingya Issue, and subsequently as National Security Adviser.',
                                'He is married and has two daughters and four grandchildren.',
                            ].map((p, i) => (
                                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>{p}</p>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <SectionHeader title="Key Milestones" subtitle="Achievements" />
                            {secretaryData.achievements.slice(0, 4).map((ach, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1.25rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-gold)', boxShadow: 'var(--shadow-sm)' }}
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

            {/* ══════════════ CAREER TIMELINE STRIP ══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-primary-dark)' }}>
                <div className="container-main">
                    <SectionHeader title="Career Journey" subtitle="Timeline" light centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
                        {timelineData.slice(0, 4).map((item, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(200,169,81,0.2)', backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}
                            >
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.year}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'white', margin: '0 0 0.35rem', lineHeight: 1.3 }}>{item.role}</h3>
                                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.organization}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/secretary" className="btn btn-gold" style={{ padding: '0.875rem 2.5rem' }}>View Full Career Timeline</Link>
                    </div>
                </div>
            </section>

            {/* ══════════════ VIDEO SPOTLIGHT ══════════════ */}
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

            {/* ══════════════ QUICK ACCESS TILES ══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('home.quick_access_title')} subtitle="Explore" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {quickTiles.map((tile, i) => {
                            const Icon = tile.icon;
                            return (
                                <motion.div key={tile.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                                    <Link to={tile.to} style={{ textDecoration: 'none', display: 'block' }}>
                                        <div className="card-base" style={{ padding: '2rem 1.5rem', textAlign: 'center', border: '2px solid transparent', transition: 'all 0.2s' }}
                                            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                                            onMouseOut={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                                        >
                                            <div style={{ width: 54, height: 54, background: 'var(--color-primary-muted)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                                                <Icon size={24} color="var(--color-primary)" />
                                            </div>
                                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 0.5rem' }}>{t(`home.${tile.key}`)}</h3>
                                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: '0 0 1rem', lineHeight: 1.5 }}>{tile.desc}</p>
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

            {/* ══════════════ NEWS ══════════════ */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <SectionHeader title={t('home.news_heading')} subtitle="Latest" />
                        <Link to="/news" className="btn btn-primary" style={{ flexShrink: 0 }}>{t('home.view_all_news')}</Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {newsData.slice(0, 3).map((news) => (
                            <motion.div key={news.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <NewsCard title={news.title} date={news.date} category={news.category} excerpt={news.excerpt} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════ PEACEKEEPING STATS BANNER ══════════════ */}
            <section style={{ background: 'var(--color-primary-dark)', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/army Un.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, rgba(200,169,81,0.04) 0px, rgba(200,169,81,0.04) 2px, transparent 2px, transparent 40px)', pointerEvents: 'none', zIndex: 1 }} />
                <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>UN Peacekeeping</span>
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', color: 'white', fontWeight: 800, margin: '0 0 1.5rem', lineHeight: 1.25 }}>
                                Bangladesh — A Global Force for Peace
                            </h2>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '3rem' }}>
                                {t('home.peacekeeping_subtext')}
                            </p>
                        </motion.div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
                            {[{ value: '6,800', suffix: '+', label: 'Troops Deployed' }, { value: '12', suffix: '', label: 'Active Missions' }, { value: '9', suffix: '', label: 'Countries' }, { value: '40', suffix: '+', label: 'Years of Service' }].map((stat, i) => (
                                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1 }}>{stat.value}{stat.suffix}</div>
                                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </PageWrapper>
    );
}
