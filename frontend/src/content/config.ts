import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    draft: z.boolean().optional(),
    hero: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = { blog };
