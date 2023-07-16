import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
	site: 'https://koloyyee.github.io',
	output: 'static',
	adapter: vercel(),
})
