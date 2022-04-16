module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'ibm-sans': ['"IBM Plex Sans"', 'sans-serif'],
            'ibm-serif': ['"IBM Plex Serif"', 'serif'],
            'ibm-mono': ['"IBM Plex Mono"', 'monospace'],
        },
    },
  },
  plugins: [],
}
