/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
            },
            maxWidth: {
                400: '25rem',
            },
            opacity: {
                15: '.15',
                35: '.35',
            },
            scale: {
                102: '1.02',
            },
        },
        backgroundImage: {
            banner: "url('/images/comic-strip.jpeg')",
        },
        colors: {
            transparent: 'transparent',
            black: {
                100: '#151515',
                200: '#121212',
                300: '#101010',
            },
            grey: {
                100: '#f0f0f0',
                200: '#c8c8c8',
                300: '#a0a0a0',
                400: '#777777',
            },
            red: '#ec1d24',
            white: '#fefefe',
        },
        fontSize: {
            14: ['.875rem'],
            16: ['1rem'],
            18: ['1.125rem'],
            20: ['1.25rem'],
            24: ['1.5rem'],
            28: ['1.75rem'],
            36: ['2.25rem'],
            40: ['2.5rem'],
        },
        screens: {
            xs: '480px',
            sm: '576px',
            md: '768px',
            '<lg': { min: '280px', max: '1023px' },
            lg: '1024px',
            xl: '1280px',
        },
        spacing: {
            0: '0rem',
            1: '.0625rem',
            3: '.1875rem',
            6: '.375rem',
            8: '.5rem',
            12: '.75rem',
            16: '1rem',
            20: '1.25rem',
            24: '1.5rem',
            28: '1.75rem',
            32: '2rem',
            40: '2.5rem',
            60: '3.75rem',
            64: '4rem',
            100: '6.25rem',
            120: '7.5rem',
            full: '100%',
            screen: '100vh',
        },
    },
    plugins: [
        ({ addBase, addComponents, addUtilities }) => {
            const buttonLinkBase = 'inline-flex gap-12 clip-path px-40 py-16 uppercase text-14';
            const navlinkBase =
                'uppercase text-20 border-y-2 border-transparent navlink-transition outline-none hover:border-b-red focus:border-b-red lg:text-16 focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-2';
            addComponents({
                '.button': {
                    '&-link-primary': {
                        [`@apply ${buttonLinkBase} text-white bg-black-100 hover:bg-red duration-200 ease-linear outline-none focus-visible:bg-red`]:
                            {},
                    },
                    '&-link-secondary': {
                        [`@apply ${buttonLinkBase} bg-grey-200 hover:bg-grey-300 duration-200 ease-linear outline-none focus-visible:bg-grey-300`]:
                            {},
                    },
                },
                '.navlink': {
                    '&-primary': {
                        [`@apply ${navlinkBase} text-grey-300`]: {},
                    },
                    '&-primary-active': {
                        [`@apply ${navlinkBase} text-white`]: {},
                    },
                },
            });
            addUtilities({
                '.media-card-text-transition': {
                    transition: 'opacity .2s linear, visibility .2s linear, color .2s linear,',
                },
                '.navlink-transition': {
                    transition: 'color .2s linear, border .2s linear, outline .2s linear',
                },
                '.navlist-transition': {
                    transition: 'left .2s ease-out',
                },
                '.clip-path': {
                    'clip-path': 'polygon(15% 0, 100% 0, 100% 30%, 100% 55%, 85% 100%, 30% 100%, 0 100%, 0 45%)',
                },
                '.hide': {
                    visibility: 'hidden',
                },
                '.show': {
                    visibility: 'visible',
                },
                '.skip-to-content-transition': {
                    transition: 'opacity .2s linear, background .2s linear, outline .2s linear',
                },
                '.transition-none': {
                    transition: 'none',
                },
                '.scrollbar-none': {
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '.text-shadow': {
                    'text-shadow': '1px 1px 4px #101010',
                },
                '.text-shadow-none': {
                    'text-shadow': 'none',
                },
            });
            addBase({
                body: {
                    '@apply font-roboto-condensed antialiased leading-none text-black-100 scrollbar-none bg-black-100':
                        {},
                },
            });
        },
    ],
    // corePlugins: {
    //     transitionProperty: false,
    // },
};
