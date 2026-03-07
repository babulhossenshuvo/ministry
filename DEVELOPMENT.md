# Developer Documentation — Bangladesh UN Portal Prototype

This document provides technical details for maintaining and extending the **Bangladesh UN Portal** prototype.

## 🎨 Design System

The design system is governed by CSS custom properties in `src/styles/variables.css`. These variables are mapped to Tailwind CSS config in `tailwind.config.js`.

- **Primary Colors**: Green (`#006A4E`), Gold (`#C8A951`), Navy (`#1A2A4A`), Ivory (`#FDFEFE`).
- **Typography Scales**: Heads (Playfair Display), Body (Lora), UI (DM Sans).
- **Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 128px.
- **Borders & Shadows**: Standardized `radius-md` (8px), `radius-lg` (12px), `radius-xl` (24px).

## 🌍 Multilingual (i18n)

Translations are handled by `i18next`. 

- **Translation Files**: Located in `src/locales/`. 
- **Adding a Language**: 
    1.  Create a new folder in `src/locales/`. 
    2.  Add `translation.json`. 
    3.  Register the language in `src/i18n.js` and `src/context/LanguageContext.jsx`.
- **RTL Support**: Specific RTL overrides are in `src/styles/rtl.css`. 

## 🗺️ Interactive Maps

Uses `react-leaflet`. Marker icons are fixed for React compatibility in `src/components/shared/InteractiveMap.jsx`.

- **Adding a Map**: Simply use the `<InteractiveMap />` component and provide `lat` and `lng` as props.

## 📊 Charts

Peacekeeping statistics and other data visualizations are powered by `recharts`. Data is maintained centrally in `src/data/contributionsData.js`.

## ✨ UI Components

- **Modal**: Accessible modal with focus trap and Framer Motion transitions.
- **SplashScreen**: Animation-rich entry point, shown once per session.
- **ScrollToTop**: Animated floating button for easier navigation.

## 📂 Content Management

Content is managed as static JSON/JS files in `src/data/`. This allows easy updates without redeploying the logic. 

- `secretaryData.js`: Profile and mandate.
- `delegationData.js`: Member directory (12 slots).
- `newsData.js`: Paginated and categorized news feed.
- `contributionsData.js`: Resolutions and peacekeeping numbers.

---

*Built with ❤️ for Bangladesh*
