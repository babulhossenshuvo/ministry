import React, { useEffect, useRef, useState } from 'react';

export default function StatCounter({ end, suffix = '', duration = 2000, label }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        const numericEnd = parseInt(end.toString().replace(/\D/g, ''));
        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericEnd));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return (
        <div ref={ref} style={{ textAlign: 'center' }}>
            <div className="stat-number" style={{ fontSize: '3rem', lineHeight: 1 }}>
                {count.toLocaleString()}{suffix}
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {label}
            </div>
        </div>
    );
}
