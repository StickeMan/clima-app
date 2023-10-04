/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        white: '#FFFFFF', // #F5F5F5
        positive: '#2BB673',
        negative: '#EE3B3B',
        darkWhite: '#F5F5F5',
        lightBlack: '#333333',
        primary: {
          DEFAULT: '#0082CB',
          50: '#E0F0F9',
          100: '#B3DAEF',
          200: '#80C1E5',
          300: '#4DA8DB',
          400: '#2695D3',
          500: '#0082CB',
          600: '#007AC6',
          700: '#006FBE',
          800: '#0065B8',
          900: '#0052AC',
          950: '#014da1',
        },
        secondary: {
          50: '#F0F1F1',
          100: '#D8DDDD',
          200: '#BFC6C6',
          300: '#A5AFAF',
          400: '#A5AFAF',
          500: '#7E8C8D',
          600: '#768485',
          700: '#6B797A',
          800: '#6B797A',
          900: '#4E5C5D',
          950: '#424e4f',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      maxHeight: {
        104: '26rem',
        112: '28rem',
        120: '30rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        160: '40rem',
        168: '42rem',
        176: '44rem',
        184: '46rem',
        192: '48rem',
        200: '50rem',
      },
    },
  },
  plugins: [],
}
