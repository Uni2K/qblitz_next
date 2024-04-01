/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            tiny: '430px',
            sm: '660px',
            md: '768px',
            xmd: '950px' /*Index Tablet*/,
            xlmd: '1100px' /*Index Tablet*/,
            lm: '1200px',
            lg: '1330px',
            xl: '1440px',
            xll: '1600px', //only for index -> laptops
            xlll: '1920px', //navbar vs toolbar
            xxl: '2560px', //larger than full HD -> wide screens
        },
        fontWeight: {
            bold: 600,
            medium: 500,
            regular: 400,
        },
        colors: {
            'background':'#010101',



            'accent-blue': '#1E7BF3',
            'subtle-blue': '#E4EFFE',

            'primary-navy': '#15204B',
            'grey-navy': '#888EA6',
            'faded-navy': '#a1a1a1',

            'primary-light': '#EEF0F8',
            'subtle-light': '#F8FAFF',
            'white': '#FFFFFF',
            'section-light': '#F9FAFC',
            'alternative-light': '#F9F9F9',

            'primary-success': '#06C270',
            'subtle-success': '#DAF6EA',

            'primary-error': '#FF5C5C',
            'subtle-error': '#FFDEDE',

            'badge1-bg':'rgba(40,27,54,0.55)',
            'badge1-text':'#9167be',

            'badge2-bg':'#281a0b',
            'badge2-text':'#b47c63',

            'primary-neutral': '#54428E',
            'subtle-neutral': '#e7e0f8',

            "default-hover": 'rgba(253,253,255,0.1)',
            'hover-color-light': '#EEF0F8', //brighter elements
            'hover-color-dark': '#EEF0F8', //darker elements like buttons

            'primary-neutral-emphasized': '#c053ff',
            'subtle-neutral-emphasized': '#d1a8fc',

            'dark-grey': '#323639',
            'dark-grey-hover': '#424649',

            /* Others */
            'europe': '#fea700',
            'badge-qa': '#BED8E2',
            'badge-gl': '#DAB4E5',
            'badge-rd': '#93ecd9',
            'badge-its': '#F0CA86',
            'badge-new': '#00CA9C',
            'layout-separator': 'rgba(255,255,255,0.10)',
        },
        extend: {
            fontSize: {
                /*Adjusted from Figma -> Base Text Size 15 ~ 1rem; default extra for smaller adjustments*/
                heading1: '2.75rem',
                heading2: '2.125rem',
                heading3: '1.5rem',
                heading4: '1.133rem',
                subtitle: '1.225rem',
                paragraph: '1rem',
                label: '1rem',
                sublabel: '0.875rem',
                default: '16px',
            },
            height: {
                navbar: '60px',
                navbarSmall: '78px',
                footer: '233px'
            },
            maxWidth: {
                login: '450px',
                register: '600px',
                content: '1100px',
            },
            padding: {
                navbar: '60px',
                navbarSmall: '78px'
            },
            top: {
                navbar: '60px',
                navbarSmall: '78px'
            },
            margin: {
                "default-top": "60px",
                "sidebar-extended": "340px",
                "sidebar-collapsed": "240px",
                "sidebar-mini": "60px",
            },
            width: {
                "sidebar-extended": "300px",
                "sidebar-collapsed": "240px",
                "sidebar-mini": "60px",
            },
            boxShadow: {
                floating: '0 10px 70px -12px rgb(0 0 0 / 0.25)',
                dropdown: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                blueButton: '4px 4px 14px 3px rgba(30, 123, 243, 0.24)'

            },
            fontFamily: {
                primary: ['var(--figtree-font)', ...fontFamily.sans],
                serif: ['var(--figtree-font)', ...fontFamily.serif],
            },
        },
    },
}
export {}