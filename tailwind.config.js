/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '420px',
      },
      gridTemplateColumns: {
        frAutoFr: '1fr auto 1fr',
        autoAuto: 'auto auto',
        autoFr: 'auto 1fr',
      },
      gridTemplateRows: {
        autoFr: 'auto 1fr',
      },
      minWidth: {
        body: '320px',
      },
      maxWidth: {
        body: '1000px',
        'body-sm': '800px',
      },
      width: {
        body: 'calc(100vw - 4rem)',
        'body-sm': 'calc(100vw - 2rem)',
      },
      colors: {
        semiWhite: '#ffffff99',

        palegrey: '#f1f1f2',
        pink: '#ff89fe',
        yellow: '#fff170',
        darkblue: '#1c2434',
        lightblue: '#00c8ba',
        white: '#ffffff',

        st0: '#00C8BA',
        st1: '#FFFFFF',
        st2: '#80D8D8',
        st3: '#FFF170',
        st4: '#FF89FE',
        st5: '#1C2434',

        'light-text-mid': '#32405d',

        'darkblue-bgvar': '#141a25',
        'darkblue-bg': '#1e2738',

        'bg-var-dk': '#141a25',
        'bg-dk': '#1e2738',
        'deco-dk': '#3d3d3d',
        'border-dk': '#6b6b6b',
        'txt-mid-dk': '#ababab',
        'txt-main-dk': '#ffffff',

        'txt-main': '#1c2434',
        'txt-mid': '#44587f',
        border: '#919191',
        deco: '#e0e0e0',
        'bg-var': '#f1f1f2',
        bg: '#ffffff',
      },
      boxShadow: {
        bottom: '1px 3px 0px -2px rgba(0, 0, 0, 1)',
      },
      strokeWidth: {
        4: '4px',
      },
    },
  },
  plugins: [],
};
