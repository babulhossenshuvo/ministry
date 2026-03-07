import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import SplashScreen from './components/ui/SplashScreen';
import ScrollToTop from './components/ui/ScrollToTop';
import { router } from './router';
import './styles/global.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SplashScreen />
        <ScrollToTop />
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
