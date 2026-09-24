import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields mirror the `posts` collection in .pages.yml (Pages CMS).
// A `slug` frontmatter field is picked up by the glob loader as the entry id.
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string().optional(),
		pubDatetime: z.coerce.date(),
		modDatetime: z.coerce.date().nullish(),
		ogImage: z.string().optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };
