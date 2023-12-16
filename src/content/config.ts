import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cardBgLandscape: image(),
      cardBgPortrait: image(),
      tags: z.array(z.string()),
      order: z.number(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
