/** Supported site locales. */
export const locales = ['fr', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

/** UI chrome strings keyed by locale. */
export const ui = {
	fr: {
		siteName: 'BELA GEM Multi Dub Preamp',
		home: 'Accueil',
		versions: 'Versions',
		tutorialSteps: 'Étapes',
		language: 'Langue',
		readMore: 'Voir le tutoriel',
		backToVersions: 'Toutes les versions',
		backToVersion: 'Retour à la version',
		stepOf: 'Étape',
		placeholderNote: 'Contenu à rédiger.',
	},
	en: {
		siteName: 'BELA GEM Multi Dub Preamp',
		home: 'Home',
		versions: 'Versions',
		tutorialSteps: 'Steps',
		language: 'Language',
		readMore: 'View tutorial',
		backToVersions: 'All versions',
		backToVersion: 'Back to version',
		stepOf: 'Step',
		placeholderNote: 'Content to be written.',
	},
} as const;

/**
 * Returns a UI string for the given locale and key.
 */
export function t(locale: Locale, key: keyof (typeof ui)['fr']): string {
	return ui[locale][key];
}
