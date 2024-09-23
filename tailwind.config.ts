import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary))',
				secondary: 'rgb(var(--color-secondary))'
			}
		}
	},
	plugins: []
};
export default config;
