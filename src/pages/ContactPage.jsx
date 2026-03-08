import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Printer as Fax, AlertTriangle, CheckCircle2 } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeader from '../components/shared/SectionHeader';
import InteractiveMap from '../components/shared/InteractiveMap';

const SUBJECTS = ['Press Inquiry', 'Diplomatic Protocol', 'General Inquiry', 'Event Request', 'Other'];

export default function ContactPage() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: '', org: '', country: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Full name is required.';
        if (!form.org.trim()) e.org = 'Organization is required.';
        if (!form.country.trim()) e.country = 'Country is required.';
        if (!form.subject) e.subject = 'Please select a subject.';
        if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please enter a message of at least 20 characters.';
        return e;
    };

    const handleSubmit = () => {
        const e = validate();
        if (Object.keys(e).length > 0) { setErrors(e); return; }
        setErrors({});
        setSubmitted(true);
        setForm({ name: '', org: '', country: '', subject: '', message: '' });
    };

    const Field = ({ id, label, children, error }) => (
        <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor={id} className="form-label">{label} *</label>
            {children}
            {error && <p className="form-error">{error}</p>}
        </div>
    );

    const contactInfo = (title, icon, items) => (
        <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '1.25rem', fontWeight: 700 }}>{title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '32px', height: '32px', background: 'var(--color-primary-muted)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Icon size={15} color="var(--color-primary)" />
                            </div>
                            <div>
                                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', margin: '0 0 0.15rem' }}>{item.label}</p>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <PageWrapper>
            {/* Premium Header */}
            <section style={{
                minHeight: '300px',
                background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-navy) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '100px 1.5rem 3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <iframe
                    src="https://www.youtube.com/embed/Jl-87YtFzxQ?autoplay=1&mute=1&controls=0&loop=1&playlist=Jl-87YtFzxQ&showinfo=0&rel=0&playsinline=1&start=600"
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
                        {t('contact.page_title')}
                    </h1>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-padding" style={{ background: 'var(--color-ivory)' }}>
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {contactInfo(t('contact.mission_address_heading'), MapPin, [
                            { icon: MapPin, label: 'Address', value: '820 Second Avenue, Suite 502\nNew York, NY 10017, USA' },
                            { icon: Phone, label: 'Phone', value: '+1 (212) 867-3434' },
                            { icon: Fax, label: 'Fax', value: '+1 (212) 972-4038' },
                            { icon: Mail, label: 'Email', value: 'mission@un.mofa.gov.bd' },
                        ])}
                        {contactInfo(t('contact.ministry_address_heading'), MapPin, [
                            { icon: MapPin, label: 'Address', value: 'Segunbagicha, Dhaka-1000\nBangladesh' },
                            { icon: Phone, label: 'Phone', value: '+880 2-9571163' },
                            { icon: Fax, label: 'Fax', value: '+880 2-9564848' },
                            { icon: Mail, label: 'Email', value: 'info@mofa.gov.bd' },
                        ])}
                    </div>

                    {/* Protocol Note */}
                    <div style={{ background: 'var(--color-white)', border: '2px solid var(--color-gold)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                            <AlertTriangle size={22} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 0.75rem' }}>
                                    {t('contact.protocol_heading')}
                                </h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, margin: 0 }}>
                                    {/* PLACEHOLDER — Replace before production */}
                                    Press inquiries require official press credentials from a recognized media organization. Diplomatic correspondence must follow standard protocol and should be addressed to the Permanent Representative. All communications entered via this form are reviewed by mission staff within 3 working days. For urgent diplomatic matters, please contact the mission directly by phone.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <SectionHeader title={t('contact.form_heading')} subtitle="Inquiry" />
                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                    style={{ background: 'var(--color-primary-muted)', border: '2px solid var(--color-primary)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center' }}
                                >
                                    <CheckCircle2 size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Message Sent Successfully</h3>
                                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', margin: 0 }}>
                                        {t('contact.success_message')}
                                    </p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Send Another Message</button>
                                </motion.div>
                            ) : (
                                <div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <Field id="name" label={t('contact.field_name')} error={errors.name}>
                                            <input id="name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={`form-input ${errors.name ? 'error' : ''}`} aria-required="true" />
                                        </Field>
                                        <Field id="org" label={t('contact.field_org')} error={errors.org}>
                                            <input id="org" type="text" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} className={`form-input ${errors.org ? 'error' : ''}`} aria-required="true" />
                                        </Field>
                                    </div>
                                    <Field id="country" label={t('contact.field_country')} error={errors.country}>
                                        <input id="country" type="text" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} className={`form-input ${errors.country ? 'error' : ''}`} aria-required="true" />
                                    </Field>
                                    <Field id="subject" label={t('contact.field_subject')} error={errors.subject}>
                                        <select id="subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className={`form-input ${errors.subject ? 'error' : ''}`} aria-required="true" style={{ cursor: 'pointer' }}>
                                            <option value="">Select a subject...</option>
                                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </Field>
                                    <Field id="message" label={t('contact.field_message')} error={errors.message}>
                                        <textarea id="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} className={`form-input ${errors.message ? 'error' : ''}`} aria-required="true" style={{ resize: 'vertical' }} />
                                    </Field>
                                    <div onClick={handleSubmit} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleSubmit()} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', userSelect: 'none' }}>
                                        {t('contact.btn_submit')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Maps section */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <SectionHeader title="Mission Location" subtitle="New York, USA" />
                                <InteractiveMap
                                    lat={40.750868}
                                    lng={-73.971512}
                                    popupText="Bangladesh Permanent Mission to the UN, New York"
                                />
                            </div>
                            <div>
                                <SectionHeader title="Ministry Location" subtitle="Dhaka, Bangladesh" />
                                <InteractiveMap
                                    lat={23.731737}
                                    lng={90.410425}
                                    popupText="Ministry of Foreign Affairs, Dhaka"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
