/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,cjs,json}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'peach': '#FFF1E8',
        'soft-pink': '#FCE4EC',
        'motherina-pink': '#E8317A',
        'motherina-pink-dark': '#C91D65',
        'motherina-pink-light': '#FDF2F7',
        'sage-beige': '#F8F5F0',
        'lavender': '#EFEBF8',  
        'warm-gray': '#374151', // Crisp charcoal for high readability on light backgrounds
        'warm-gray-muted': '#6B7280',
        'soft-brown': '#43281C', // Rich deep espresso brown with high contrast
        'soft-brown-muted': '#6A4A3A',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
