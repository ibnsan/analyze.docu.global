/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aquahaze: '#EBF2F5',
        solitude: '#D0E1E7',
        matisse: '#0070A5',
        orient: '#0A5479',
        bluewhale: '#06314B',
        shark: '#222222',
        emperor: '#4F4D4D',
        gray: '#8A8686',
        cloud: '#CCCACA',
        mercury: '#E5E3E3',
        alabaster: '#F5F5F5',
        tomato: '#FF6337'
      },
    },
  },
  plugins: [],
}

