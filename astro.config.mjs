// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://cla.moe',
	image: {
		// Generate srcset/sizes for optimized images, including those in Markdown.
		layout: 'constrained',
		responsiveStyles: true,
	},
});
