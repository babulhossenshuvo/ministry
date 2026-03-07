import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const SecretaryPage = lazy(() => import('./pages/SecretaryPage'));
const MissionPage = lazy(() => import('./pages/MissionPage'));
const DelegationPage = lazy(() => import('./pages/DelegationPage'));
const ContributionsPage = lazy(() => import('./pages/ContributionsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const Loader = () => (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
            {[0, 1, 2].map(i => (
                <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-primary)', animation: `pulse-dot 1s ease-in-out ${i * 0.2}s infinite` }} />
            ))}
        </div>
    </div>
);

const withSuspense = (Component) => (
    <Suspense fallback={<Loader />}>
        <Component />
    </Suspense>
);

export const router = createBrowserRouter([
    { path: '/', element: withSuspense(HomePage) },
    { path: '/secretary', element: withSuspense(SecretaryPage) },
    { path: '/mission', element: withSuspense(MissionPage) },
    { path: '/delegation', element: withSuspense(DelegationPage) },
    { path: '/contributions', element: withSuspense(ContributionsPage) },
    { path: '/news', element: withSuspense(NewsPage) },
    { path: '/contact', element: withSuspense(ContactPage) },
    { path: '/about', element: withSuspense(AboutPage) },
    { path: '*', element: withSuspense(NotFoundPage) },
]);
