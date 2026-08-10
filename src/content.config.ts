import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { tutorialSteps } from './content/constants';

const versions = defineCollection({
	loader: glob({ base: './src/content/versions', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number(),
	}),
});

const tutorials = defineCollection({
	loader: glob({ base: './src/content/tutorials', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number(),
		step: z.enum(tutorialSteps),
	}),
});

export const collections = { versions, tutorials };
