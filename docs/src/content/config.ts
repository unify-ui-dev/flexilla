import { z, defineCollection } from 'astro:content';

const docsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        hideTableOfContent:z.boolean().optional(),
        hidePagination:z.boolean().optional()
    })
})
export const collections = {
    docs: docsCollection,
};