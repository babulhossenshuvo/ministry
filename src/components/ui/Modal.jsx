import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Modal({ isOpen, onClose, children, title }) {
    const { t } = useTranslation();
    const closeRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        const previousFocus = document.activeElement;
        closeRef.current?.focus();
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
            previousFocus?.focus();
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="modal-overlay"
                    style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        style={{
                            background: 'var(--color-white)',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-xl)',
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '85vh',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 1.75rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-primary-muted)', flexShrink: 0 }}>
                            <h2 id="modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                                {title}
                            </h2>
                            <button
                                ref={closeRef}
                                onClick={onClose}
                                aria-label={t('common.close')}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: '0.25rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                            >
                                <X size={22} />
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div style={{ overflowY: 'auto', padding: '1.75rem', flex: 1 }}>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
