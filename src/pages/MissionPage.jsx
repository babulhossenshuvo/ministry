import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Globe2, Users, Leaf, Heart, Shield, BookOpen, BarChart3 } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';

const objectives = [
    { icon: Shield, title: "Maintain International Peace & Security", desc: "Bangladesh champions peaceful resolution of conflicts through multilateral mechanisms, supporting UN-led peacekeeping and conflict prevention efforts globally." },
    { icon: Leaf, title: "Climate Justice & Environmental Integrity", desc: "As one of the most climate-vulnerable nations, Bangladesh leads international advocacy for ambitious climate action, loss and damage financing, and green transition." },
    { icon: Heart, title: "Promote Human Rights & Dignity", desc: "Bangladesh actively participates in the Human Rights Council and Third Committee to advance universal human rights standards and humanitarian principles." },
    { icon: BarChart3, title: "Accelerate Sustainable Development", desc: "Bangladesh advocates for enhanced international support for SDG implementation, particularly for Least Developed Countries and climate-vulnerable small states." },
    { icon: Users, title: "Strengthen Multilateral Governance", desc: "Bangladesh supports inclusive and reformed multilateral institutions that give voice to the Global South and ensure equitable representation in global decision-making." },
    { icon: BookOpen, title: "Foster South-South Cooperation", desc: "Bangladesh promotes shared learning, technology transfer, and partnership among developing nations through South-South and triangular cooperation frameworks." },
];

const milestones = [
    { year: "1974", event: "Bangladesh admitted to the United Nations" },
    { year: "1978", event: "Bangladesh's first contribution to UN peacekeeping" },
    { year: "1985", event: "Bangladesh joins the Group of 77 developing nations" },
    { year: "1999", event: "Bangladesh becomes leading troop contributor to UN missions" },
    { year: "2011", event: "Bangladesh elected to UN Security Council (2000-2001)" },
    { year: "2019", event: "Bangladesh graduates to middle-income country status" },
    { year: "2021", event: "Bangladesh celebrates 50th anniversary of independence" },
    { year: "2023", event: "Bangladesh presents milestone Voluntary National Review at HLPF" },
    { year: "2026", event: "Bangladesh delegation at the 81st UN General Assembly" },
];

const committees = [
    { name: "UN Peacebuilding Commission", role: "Member", year: "2006" },
    { name: "Group of 77 and China", role: "Active Member", year: "1985" },
    { name: "UN Human Rights Council", role: "Member State", year: "2006" },
    { name: "UN Commission on the Status of Women", role: "Active Participant", year: "1975" },
    { name: "UN Economic and Social Council (ECOSOC)", role: "Member", year: "1980" },
    { name: "Forum on Minority Issues", role: "Participant", year: "2007" },
    { name: "Climate Vulnerable Forum", role: "Founding Member", year: "2009" },
    { name: "Least Developed Countries Group", role: "Chair (2021–2022)", year: "1975" },
];

export default function MissionPage() {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {/* Premium Hero Banner */}
            <section style={{
                minHeight: '380px',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary-dark) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '110px 1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="hero-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: 800, margin: '0 0 1.5rem', letterSpacing: '-0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        {t('mission.page_title')}
                    </h1>
                    <nav aria-label="Breadcrumb" className="breadcrumb" style={{ justifyContent: 'center', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
                        <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>UN Mission</span>
                    </nav>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* Mission Card */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            style={{ background: 'var(--color-primary)', borderRadius: 'var(--radius-xl)', padding: '3rem 2.5rem', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ position: 'absolute', top: '-20px', left: '1rem', fontFamily: 'var(--font-display)', fontSize: '8rem', color: 'rgba(255,255,255,0.06)', lineHeight: 1, userSelect: 'none' }}>"</div>
                            <Target size={32} color="var(--color-gold)" style={{ marginBottom: '1.25rem' }} />
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                                {t('mission.mission_heading')}
                            </h2>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, fontStyle: 'italic' }}>
                                {/* PLACEHOLDER — Replace before production */}
                                {t('mission.mission_statement')}
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                            style={{ background: 'var(--color-ivory-dark)', borderRadius: 'var(--radius-xl)', padding: '3rem 2.5rem', border: '2px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ position: 'absolute', top: '-20px', left: '1rem', fontFamily: 'var(--font-display)', fontSize: '8rem', color: 'rgba(0,106,78,0.06)', lineHeight: 1, userSelect: 'none' }}>"</div>
                            <Eye size={32} color="var(--color-primary)" style={{ marginBottom: '1.25rem' }} />
                            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                                {t('mission.vision_heading')}
                            </h2>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, fontStyle: 'italic' }}>
                                {/* PLACEHOLDER — Replace before production */}
                                {t('mission.vision_statement')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Objectives */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('mission.objectives_heading')} subtitle="Strategy" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {objectives.map((obj, i) => {
                            const Icon = obj.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="card-base" style={{ padding: '1.75rem' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '42px', height: '42px', background: 'var(--color-primary-muted)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Icon size={20} color="var(--color-primary)" />
                                        </div>
                                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dark)' }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>{obj.title}</h3>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>{obj.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* UN History Timeline */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('mission.history_heading')} subtitle="History" centered />
                    <div className="table-responsive">
                        <div style={{ display: 'flex', gap: '0', overflowX: 'auto', paddingBottom: '1rem' }}>
                            {milestones.map((m, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                    style={{ minWidth: '160px', flex: '0 0 160px', padding: '0 1rem', borderLeft: i > 0 ? '2px solid var(--color-primary-muted)' : 'none', position: 'relative', paddingTop: '2rem' }}
                                >
                                    <div style={{ position: 'absolute', top: 0, left: '-6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-gold)', border: '2px solid var(--color-primary)' }} />
                                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>{m.year}</span>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>{m.event}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Peacekeeping Stats */}
            <section className="section-padding" style={{ background: 'var(--color-primary)' }}>
                <div className="container-main">
                    <SectionHeader title={t('mission.peacekeeping_heading')} subtitle="Peacekeeping" centered light />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        {[
                            { value: '6,800+', label: 'Total Troops' },
                            { value: '12', label: 'Active Missions' },
                            { value: '9', label: 'Countries' },
                            { value: '40+', label: 'Years of Service' },
                        ].map((s, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-gold)' }}>{s.value}</div>
                                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.4rem' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UN Committees */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('mission.committees_heading')} subtitle="Participation" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {committees.map((c, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
                            >
                                <Globe2 size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                                <div>
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)', margin: '0 0 0.2rem' }}>{c.name}</p>
                                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>{c.role} · Since {c.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
