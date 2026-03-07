/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            spacing: {
                'section': '5rem',
                'section-sm': '3rem',
                'container': '1280px',
                'container-sm': '960px',
            },
            fontFamily: {
                display: ['Playfair Display', 'Georgia', 'serif'],
                body: ['Lora', 'Times New Roman', 'serif'],
                ui: ['DM Sans', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#006A4E',
                    dark: '#004D38',
                    light: '#008C67',
                    muted: '#E8F5F0',
                },
                gold: {
                    DEFAULT: '#C8A951',
                    light: '#E8D28A',
                },
                navy: {
                    DEFAULT: '#1A2A4A',
                    light: '#2E4170',
                },
                ivory: {
                    DEFAULT: '#F7F3EC',
                    dark: '#EDE7D9',
                },
                border: {
                    DEFAULT: '#D4C9B0',
                    dark: '#B0A898',
                },
            },
            maxWidth: {
                'container': '1280px',
                'container-sm': '960px',
            },
            screens: {
                'xs': '480px',
            },
            animation: {
                'counter': 'counter 2s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
}
