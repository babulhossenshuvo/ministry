import React from 'react';
import { motion } from 'framer-motion';
import { useScrollTop } from '../../hooks/useScrollTop';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
// LogoBar removed for a cleaner, professional portal layout

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export default function PageWrapper({ children }) {
    useScrollTop();
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <motion.main
                id="main-content"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                tabIndex={-1}
                style={{ flex: 1 }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
}
