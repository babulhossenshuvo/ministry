import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Handshake, Leaf, Users, Scale, Globe2, Shield } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';

const COUNTRY_FACTS = [
    { label: 'Official Name', key: 'official_name' },
    { label: 'Capital', key: 'capital' },
    { label: 'Population', key: 'population' },
    { label: 'Area', key: 'area' },
    { label: 'Official Language', key: 'language' },
    { label: 'Currency', key: 'currency' },
    { label: 'Independence', key: 'independence' },
];

const POLICY_PRINCIPLES = [
    { icon: Handshake, title: "Friendship to All, Malice to None", desc: "Bangladesh's foreign policy, enshrined in its Constitution, is based on mutual respect, non-interference, and peaceful coexistence with all nations." },
    { icon: Leaf, title: "Climate Justice Advocacy", desc: "Bangladesh leads international efforts to secure climate finance and accountability from major emitters for disproportionate impacts on vulnerable nations." },
    { icon: Users, title: "South-South Cooperation", desc: "Bangladesh actively promotes shared solutions and solidarity among developing nations through bilateral partnerships and multilateral frameworks." },
    { icon: Scale, title: "Respect for International Law", desc: "Bangladesh upholds the UN Charter, international humanitarian law, and human rights principles as fundamental pillars of its foreign engagement." },
    { icon: Globe2, title: "Active UN Membership", desc: "As a founding member of major UN initiatives, Bangladesh contributes diplomatically, financially, and through peacekeeping to the UN system." },
    { icon: Shield, title: "Regional Peace & Stability", desc: "Bangladesh promotes peaceful dialogue and multilateral cooperation in South Asia, contributing to regional stability and development partnerships." },
];

const PARTNERSHIPS = [
    { country: "India", flag: "🇮🇳", relation: "Strategic Partnership — economic, cultural, water, transit" },
    { country: "China", flag: "🇨🇳", relation: "Comprehensive Strategic Cooperative Partnership" },
    { country: "United States", flag: "🇺🇸", relation: "Development, security, and trade partner" },
    { country: "United Kingdom", flag: "🇬🇧", relation: "Historical ties, diaspora, development cooperation" },
    { country: "European Union", flag: "🇪🇺", relation: "Trade partner (GSP+), development assistance" },
    { country: "Japan", flag: "🇯🇵", relation: "Major development partner, infrastructure investment" },
    { country: "ASEAN Nations", flag: "🌏", relation: "Regional cooperation, trade, connectivity" },
    { country: "OIC Member States", flag: "🕌", relation: "Islamic cooperation, development solidarity" },
];

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {/* Premium Header with Video Background */}
            <section style={{
                minHeight: '500px',
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '110px 1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <iframe
                    src="https://www.youtube.com/embed/xy2kRkcn-rc?autoplay=1&mute=1&controls=0&loop=1&playlist=xy2kRkcn-rc&showinfo=0&rel=0&playsinline=1&start=600"
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
                        opacity: 0.8
                    }}
                    frameBorder="0"
                />

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 40%, rgba(0,0,0,0.7) 100%)', zIndex: 1 }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(200,169,81,0.3) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none' }} />

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: 800, margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                        {t('about.page_title')}
                    </h1>
                </div>
            </section>

            {/* Country Overview */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('about.overview_heading')} subtitle="Country Facts" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                        {/* Facts Table */}
                        <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ background: 'var(--color-primary)', padding: '1.25rem 1.5rem' }}>
                                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'white', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Key Facts</span>
                            </div>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    {COUNTRY_FACTS.map((fact, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', width: '40%', background: i % 2 === 0 ? 'var(--color-ivory)' : 'transparent' }}>{fact.label}</td>
                                            <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-primary)', background: i % 2 === 0 ? 'var(--color-ivory)' : 'transparent' }}>{t(`about.${fact.key}`)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Description & Shorts Animation */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                {/* PLACEHOLDER — Replace before production */}
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                                    The People's Republic of Bangladesh, located in South Asia at the head of the Bay of Bengal, is one of the world's most densely populated nations and a rising power in the developing world. Since gaining independence on December 16, 1971, Bangladesh has made remarkable strides in economic development, poverty reduction, and human development, emerging as a model for the developing world.
                                </p>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                                    Bangladesh has transitioned from being one of the poorest countries in the world to a lower-middle income country, achieving remarkable gains in health, education, and gender equality. The country is on track for graduation from the United Nations' Least Developed Countries category by 2026.
                                </p>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                                    Despite being among the most climate-vulnerable nations on earth, Bangladesh has emerged as a global leader in climate adaptation and resilience. Bangladesh's vibrant democracy, dynamic civil society, and resilient people continue to drive the country's remarkable developmental transformation.
                                </p>
                            </div>
                            {/* Animation / Shorts Embedded */}
                            <div style={{ width: '240px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', flexShrink: 0 }}>
                                <iframe
                                    src="https://www.youtube.com/embed/XdCynE_EAhI?autoplay=1&mute=1&controls=0&loop=1&playlist=XdCynE_EAhI&showinfo=0&rel=0&playsinline=1"
                                    allow="autoplay; encrypted-media"
                                    style={{ width: '240px', height: '426px', border: 'none', pointerEvents: 'none' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Foreign Policy */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('about.policy_heading')} subtitle="Foreign Policy" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {POLICY_PRINCIPLES.map((principle, i) => {
                            const Icon = principle.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="card-base" style={{ padding: '1.75rem' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '44px', height: '44px', background: 'var(--color-primary-muted)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Icon size={22} color="var(--color-primary)" />
                                        </div>
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dark)', marginBottom: '0.6rem' }}>{principle.title}</h3>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>{principle.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* International Partnerships */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('about.partnerships_heading')} subtitle="Partners" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                        {PARTNERSHIPS.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                            >
                                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{p.flag}</span>
                                <div>
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)', margin: '0 0 0.2rem' }}>{p.country}</p>
                                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>{p.relation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bangladesh & the World */}
            <section className="section-padding" style={{ background: 'var(--color-primary)', color: 'white' }}>
                <div className="container-main">
                    <SectionHeader title={t('about.global_heading')} subtitle="Global Presence" light />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { value: '78', suffix: '', label: 'Diplomatic Missions' },
                            { value: '10M+', suffix: '', label: 'Diaspora Worldwide' },
                            { value: '$47B+', suffix: '', label: 'Annual Exports' },
                            { value: '3rd', suffix: '', label: 'Largest Garment Exporter' },
                        ].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.15)' }}
                            >
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.5rem' }}>{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
