import React from 'react';

export default function LogoBar() {
    const logos = [
        { src: '/logos/bd-govt.png', alt: 'Government of Bangladesh National Emblem' },
        { src: '/UN.png', alt: 'United Nations' },
        { src: '/logos/bd-govt.png', alt: 'Bangladesh Permanent Mission to the UN' },
    ];

    return (
        <div
            role="banner"
            aria-label="Official logos and credentials"
            style={{
                background: 'var(--color-primary-dark)',
                padding: '0.625rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0',
            }}
        >
            <div style={{ maxWidth: '1280px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0' }}>
                {logos.map((logo, index) => (
                    <React.Fragment key={logo.alt}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85, padding: '0 1.25rem' }}
                        />
                        {index < logos.length - 1 && (
                            <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
