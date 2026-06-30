/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ── Fill these in from your Figma prototype ──────────────────────
      colors: {
        brand: {
          DEFAULT: '#1F2D3D', // primary / header
          light: '#457B9D',
          accent: '#E9C46A',  // wildcard / readiness signal accent
        },
        signal: {
          readiness: '#457B9D',     // university / readiness signal
          awareness: '#8338EC',     // candidate / self-awareness signal
          employer: '#2A9D8F',      // employer / talent futures market
        },
        medal: {
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          gold: '#FFD700',
        },
      },
      fontFamily: {
        // swap with your Figma type choices
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
