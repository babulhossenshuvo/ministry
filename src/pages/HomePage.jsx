import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, User, Globe, Users, Award, Phone, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import StatCounter from '../components/shared/StatCounter';
import NewsCard from '../components/shared/NewsCard';
import SectionHeader from '../components/shared/SectionHeader';
import { newsData } from '../data/newsData';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const quickTiles = [
    { icon: User, key: 'tile_secretary', to: '/secretary', desc: "Professional portfolio and official biography" },
    { icon: Globe, key: 'tile_mission', to: '/mission', desc: "Mission, vision & UN engagement framework" },
    { icon: Users, key: 'tile_delegation', to: '/delegation', desc: "Official delegation members and profiles" },
    { icon: Award, key: 'tile_contributions', to: '/contributions', desc: "Resolutions, peacekeeping & humanitarian work" },
    { icon: Phone, key: 'tile_contact', to: '/contact', desc: "Contact the Mission and Ministry" },
];

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section
                style={{
                    minHeight: '100vh',
                    background: 'var(--color-ivory)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div className="hero-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 1 }} />
                <div className="container-main" style={{ position: 'relative', zIndex: 3, padding: '8rem 1.5rem 4rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
                        <motion.div variants={itemVariants} style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '8px solid white' }}>
                            <img src="/Dr. Khalilur Rahman.jpeg" alt="Dr. Khalilur Rahman" style={{ width: '100%', height: 'auto', display: 'block' }} onError={(e) => { e.target.src = '/Khalilur_Rahman_(economist)_2025.jpg'; }} />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-primary-dark)', fontWeight: 800, margin: '0 0 1.5rem', lineHeight: 1.2 }}>
                                Dr. Khalilur Rahman
                            </h1>
                            <div style={{ width: '60px', height: '4px', background: 'var(--color-gold)', margin: '0 0 2rem' }} />
                            
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <p><strong>Dr. Khalilur Rahman</strong> was sworn in as the Foreign Minister of Government of Bangladesh on 17 February 2026. He previously served as National Security Adviser and High Representative for the Rohingya Issue in the Interim Government of Bangladesh.</p>
                                
                                <p>Dr. Rahman joined diplomatic service of Bangladesh in 1979 upon securing the first position in the first regular Bangladesh Civil Service examination held in 1977. In the same year, he stood first class first in MA examinations in Economics at the Dhaka University. During 1980-83, he studied at the Fletcher School of Law and Diplomacy, Tufts University and the Kennedy School of Government, Harvard University, and earned the degrees of MA in Law and Diplomacy, and PhD in Economics.</p>
                                
                                <p>During 1983-1991, he served at the Ministry of Foreign Affairs and at the Permanent Mission of Bangladesh to the United Nations in New York. He represented Bangladesh at the Economic and Financial Committee of the UN General Assembly. He was also the spokesperson of the Least Developed Countries (LDCs) and aide to the President of the 41st session of the UN General Assembly.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container-main">
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
                        <p>Dr. Rahman joined the United Nations secretariat in 1991 as Special Adviser at the UN Conference on Trade and Development (UNCTAD) in Geneva. During the ensuing 25 years at the UN, he held senior positions in the United Nations in New York and Geneva, and was a lead author of and substantive contributor to major UN flagship publications.</p>
                        
                        <p>Dr. Rahman is a founder of the East West University in Dhaka and served as a member on its Board of Trustees until November 2024 when he was appointed as the High Representative on the Rohingya Issue, and subsequently as National Security Adviser.</p>
                        
                        <p>He is married and has two daughters and four grandchildren.</p>
                    </div>
                </div>
            </section>

            {/* Quick Access Tiles */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
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
                                    <Link
                                        to={tile.to}
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
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

            {/* Mission & Vision Section (Photo Focused) */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title="Our Global Mission" subtitle="Objectives" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '450px', boxShadow: 'var(--shadow-xl)' }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
                                alt="Global Peace"
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', zIndex: 1 }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'var(--color-primary-dark)', opacity: 0.3, zIndex: 1 }} />
                            <div style={{ position: 'relative', zIndex: 2, height: '100%', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <span style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Mission</span>
                                <h3 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>Sustaining Global Peace</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    Bangladesh remains committed to its constitutional obligation of supporting the oppressed and furthering international peace through principled diplomacy.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '450px', boxShadow: 'var(--shadow-xl)' }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Vision"
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', zIndex: 1 }} />
                            <div style={{ position: 'absolute', inset: 0, background: '#005240', opacity: 0.3, zIndex: 1 }} />
                            <div style={{ position: 'relative', zIndex: 2, height: '100%', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <span style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Vision</span>
                                <h3 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>Zero Poverty world</h3>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-body)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    Leading the discourse on Climate Justice and Sustainable Development, ensuring no nation is left behind in the transition to a green global economy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Video Spotlight Section */}
            <section className="section-padding" style={{ background: 'var(--color-primary-dark)', color: 'white' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>Leadership Spotlight</span>
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>Voice of the Global South</h2>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Bangladesh's candidate for the UN leadership role brings decades of experience in mediation, climate advocacy, and peace engineering to the world stage.
                            </p>
                            <Link to="/secretary" className="btn btn-gold" style={{ padding: '1rem 2.5rem' }}>
                                Watch Campaign Vision
                            </Link>
                        </div>
                        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', border: '8px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ aspectRatio: '16/9', background: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '6px', boxShadow: '0 0 40px rgba(200,169,81,0.4)' }}>
                                    <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid var(--color-primary)' }} />
                                </div>
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', zIndex: 1 }}>
                                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'white', margin: 0, fontWeight: 600 }}>Candidacy Address: A Future of Shared Prosperity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured News */}
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
                                <NewsCard
                                    title={news.title}
                                    date={news.date}
                                    category={news.category}
                                    excerpt={news.excerpt}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Peacekeeping Banner */}
            <section
                style={{
                    background: 'var(--color-primary)',
                    padding: '5rem 1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Watermark flag pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(200,169,81,0.04) 0px, rgba(200,169,81,0.04) 2px, transparent 2px, transparent 40px)',
                    pointerEvents: 'none',
                }} />
                <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '1rem' }}>
                                UN Peacekeeping
                            </span>
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'white', fontWeight: 800, margin: '0 0 1.5rem', lineHeight: 1.25 }}>
                                {t('home.peacekeeping_heading')}
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
