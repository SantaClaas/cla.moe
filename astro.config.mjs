// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

/**
 * Post images never render wider than the 48rem content column (see Layout.astro),
 * so tell the browser that instead of the default full-viewport `sizes`.
 * Runs before Astro's image marker, which passes `sizes` on to the optimized image.
 */
const postImageSizes = {
	name: 'post-image-sizes',
	element: {
		filter: ['img'],
		/** @param {any} node @param {any} ctx */
		visit(node, ctx) {
			ctx.setProperty(node, 'sizes', '(min-width: 48rem) 48rem, 100vw');
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://cla.moe',
	image: {
		// Generate srcset/sizes for optimized images, including those in Markdown.
		layout: 'constrained',
		responsiveStyles: true,
	},
	markdown: {
		processor: satteri({ hastPlugins: [postImageSizes] }),
	},
});
