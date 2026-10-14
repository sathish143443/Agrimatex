module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1d5f3f',
          light: '#eef7ef',
          gold: '#d9b84f',
          dark: '#0d2b1d'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: []
};
