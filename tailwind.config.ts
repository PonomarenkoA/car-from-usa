import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'rgb(var(--color-primary))',
					foreground: 'rgb(var(--color-primary-foreground))'
				},
				secondary: {
					DEFAULT: 'rgb(var(--color-secondary))',
					foreground: 'rgb(var(--color-secondary-foreground))'
				}
			}
		}
	},
	plugins: []
};
export default config;
