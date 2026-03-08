import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, Download, ChevronUp, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';
import { contributionsData } from '../data/contributionsData';

const COLORS = ['#006A4E', '#008C67', '#C8A951', '#1A2A4A', '#2E4170', '#E8D28A'];

export default function ContributionsPage() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');
    const [catFilter, setCatFilter] = useState('All Categories');

    const categories = ['All Categories', 'Peace & Security', 'Human Rights', 'Climate', 'Development'];
    const filtered = contributionsData.resolutions.filter(r => {
        const matchesCat = catFilter === 'All Categories' || r.category === catFilter;
        const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.number.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <PageWrapper>
            {/* Premium Header */}
            <section style={{
                minHeight: '320px',
                background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '110px 1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <iframe
                    src="https://www.youtube.com/embed/kjgBccv8DP0?autoplay=1&mute=1&controls=0&loop=1&playlist=kjgBccv8DP0&showinfo=0&rel=0&playsinline=1"
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
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%, rgba(0,0,0,0.7) 100%)', zIndex: 1 }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(200,169,81,0.3) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: 800, margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        {t('contributions.page_title')}
                    </h1>
                </div>
            </section>

            {/* UN Resolutions Table */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('contributions.resolutions_heading')} subtitle="Resolutions" />
                    {/* Filters */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={t('contributions.search_placeholder')} className="form-input"
                                style={{ paddingLeft: '2.25rem', height: '38px', padding: '0.4rem 0.75rem 0.4rem 2.25rem', minWidth: '220px' }} />
                        </div>
                        <select value={catFilter} onChange={e => setCatFilter(e.target.value)} className="form-input" style={{ height: '38px', padding: '0 0.75rem', minWidth: '180px', cursor: 'pointer' }}>
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    {/* Table */}
                    <div className="table-responsive" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--color-white)' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                    {['Resolution Number', 'Title', 'Date', 'Status', 'Category'].map(h => (
                                        <th key={h} style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((res, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--color-border)', background: i % 2 === 0 ? 'transparent' : 'var(--color-ivory)' }}>
                                        <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>{res.number}</td>
                                        <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>{res.title}</td>
                                        <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{res.date}</td>
                                        <td style={{ padding: '0.875rem 1.25rem' }}>
                                            <span style={{ background: '#E8F5F0', color: '#006A4E', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700 }}>{res.status}</span>
                                        </td>
                                        <td style={{ padding: '0.875rem 1.25rem', fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{res.category}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filtered.length === 0 && <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'var(--font-ui)', color: 'var(--color-text-muted)' }}>No resolutions found.</div>}
                    </div>
                </div>
            </section>

            {/* Peacekeeping Charts */}
            <section className="section-padding" style={{ background: 'var(--color-ivory-dark)' }}>
                <div className="container-main">
                    <SectionHeader title={t('contributions.peacekeeping_heading')} subtitle="Data" centered />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Bar Chart */}
                        <div className="card-base" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
                                Troop Contributions by Year
                            </h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={contributionsData.peacekeepingTrends}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                                    <XAxis dataKey="year" tick={{ fontFamily: 'var(--font-ui)', fontSize: 11 }} />
                                    <YAxis tick={{ fontFamily: 'var(--font-ui)', fontSize: 11 }} />
                                    <Tooltip contentStyle={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', borderRadius: 'var(--radius-md)' }} />
                                    <Bar dataKey="troops" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Pie Chart */}
                        <div className="card-base" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
                                Troops by Mission Country
                            </h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={contributionsData.missionsByCountry} dataKey="troops" nameKey="country" cx="50%" cy="50%" outerRadius={90} label={({ country }) => country.split('(')[0].trim()}>
                                        {contributionsData.missionsByCountry.map((_, i) => (
                                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', borderRadius: 'var(--radius-md)' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* Humanitarian Work */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <SectionHeader title={t('contributions.humanitarian_heading')} subtitle="Humanitarian" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Rohingya Crisis Response", color: 'var(--color-primary)', desc: "Bangladesh hosts over 1.2 million Rohingya refugees — the world's largest refugee camp — demonstrating extraordinary humanitarian commitment. Bangladesh continues to advocate internationally for a safe, voluntary, and dignified repatriation of Rohingya to Myanmar." },
                            { title: "Climate Justice Leadership", color: 'var(--color-navy)', desc: "As a founding member of the Climate Vulnerable Forum, Bangladesh champions the rights of climate-affected nations. Bangladesh's negotiators have been instrumental in securing loss and damage finance mechanisms at COP28, a landmark victory for vulnerable states." },
                        ].map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}
                            >
                                <div style={{ height: '6px', background: card.color }} />
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: card.color, marginBottom: '1rem' }}>{card.title}</h3>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 0 }}>{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Position Papers */}
            <section className="section-padding" style={{ background: 'var(--color-primary-muted)' }}>
                <div className="container-main">
                    <SectionHeader title={t('contributions.positions_heading')} subtitle="Policy" />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { topic: "Climate Change & Environment", quote: "Bangladesh demands justice for climate-vulnerable nations — those who contributed least but suffer most from the climate crisis." },
                            { topic: "Peace & Security", quote: "Bangladesh's peacekeeping is not just a contribution — it is a reflection of our national values and our commitment to global solidarity." },
                            { topic: "Gender Equality", quote: "Inclusive development requires the full and equal participation of women in all spheres of political, economic, and social life." },
                            { topic: "Sustainable Development", quote: "The SDGs must be achieved with equity — no country, however small or vulnerable, must be left behind in the pursuit of sustainable development." },
                        ].map((paper, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="card-base" style={{ padding: '1.75rem', borderLeft: '4px solid var(--color-gold)' }}
                            >
                                <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{paper.topic}</h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 1.25rem' }}>"{paper.quote}"</p>
                                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.8rem', color: 'var(--color-primary)', textDecoration: 'none' }}>
                                    <Download size={13} /> Full Document
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
