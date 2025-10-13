/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    // "./index.html",
    // "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  safelist: [
    // {
    //   pattern: /grid-cols-([1-6])/,
    //   variants: ['sm', 'md', 'lg', 'xl'],
    // },
    // 'top-0', 'bottom-0'
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: 'rgb(var(--rgb-primary) / 1)',
      //   // primary: {
      //   //   DEFAULT: '#21C8C8',
      //   //   dark: '#137272'
      //   // }
      // },
      // scale: {
      //   '104': '1.04',
      // },
      // transitionDuration: {
      //   '1200': '1200ms'
      // },
      // container: {
      //   center: true,
      //   padding: "1rem",
      //   screens: {
      //     'sm': '600px',
      //     'md': '728px',
      //     'lg': '984px',
      //     'xl': '1240px',
      //     '2xl': '1496px',
      //     '3xl': '1920px',
      //   },
      // },
    },
  },
  // plugins: [
  //   ({ addBase, theme }) => {
  //     function extractColorVars(colorObj, colorGroup = '') {
  //       return Object.keys(colorObj).reduce((vars, colorKey) => {
  //         const value = colorObj[colorKey];

  //         const newVars =
  //           typeof value === 'string'
  //             ? { [`--color${colorGroup}-${colorKey}`]: value }
  //             : extractColorVars(value, `-${colorKey}`);

  //         return { ...vars, ...newVars };
  //       }, {});
  //     }
  //     addBase({
  //       ':root': extractColorVars(theme('colors')),
  //     });
  //   },
  // ],
}

