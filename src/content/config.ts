import { defineCollection, z } from 'astro:content';
// List of categories for blog posts
export const CATEGORIES = [
	'Category 1',
	'Category 2',
	'Category 3',
	'Category 4',
	'Category 5',
	'Быть, а не казаться',
] as const;

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			images: z.array(image()).optional(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
