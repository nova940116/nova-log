import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/pliny/**/*.js'
  ],
  darkMode: "class",
  theme: {},
  plugins: [require('@tailwindcss/typography')],
}
export default config
