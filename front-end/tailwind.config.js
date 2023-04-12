module.exports = {
    content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        screens: {
            xxs: '350px',
            xs: '475px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1700px',
        },
        extend: {
            colors: {
                albastriu: '#4d29ff',
                purpuriu: '#6800ff',
                'dark-gray': '#656565',
                fullblack: '#000000',
            },
            fontFamily: {
                Play: ['Play', 'sans-serif'],
                exo: ["'Exo 2'", 'sans-serif'],
                monda: ['Monda', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
