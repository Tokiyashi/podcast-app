import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.3)',
        'card-bg': '#24242C',
        main: '#41E1EA',
        'dark-main': '#253C46',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#41E1EA',
              foreground: '#000000',
            },
            focus: '#ffffff',
          },
        },
      },
    }),
  ],
}
export default config
