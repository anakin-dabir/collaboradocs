/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#214E58',
          secondary: '#052742',
        },
        primary: {
          main: '#18ffff',
        },
      },
    },
  },
  plugins: [],
};
