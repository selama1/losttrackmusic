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

const songs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    act: z.string(),
    narrator: z.string().optional(),
    mood: z.string().optional(),
    tags: z.array(z.string()).optional(),
    audio: z.string().optional(),
    cover: z.string().optional(),
    summary: z.string().optional()
  })
});

export const collections = {blog, songs};