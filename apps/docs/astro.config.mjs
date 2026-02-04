// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SOS - Standardized Operations Syntax',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/the-dev-center/shell-flag-standard' }],
			sidebar: [
				{
					label: 'The Standard',
					items: [
						{ label: 'Introduction', slug: 'standard/intro' },
						{ label: 'Formal Grammar', slug: 'standard/grammar' },
						{ label: 'Mandatory Protocols', slug: 'standard/protocols' },
					],
				},
				{
					label: 'Certification',
					items: [
						{ label: 'Certification Program', slug: 'certification/about' },
						{ label: 'Validator API', slug: 'certification/api' },
					],
				},
			],
		}),
	],
});
