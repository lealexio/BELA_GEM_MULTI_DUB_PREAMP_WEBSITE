import type { Locale } from './ui';
import { defaultLocale, locales } from './ui';
import type { TutorialStep } from '../content/constants';

export type { TutorialStep };

/**
 * Narrows a string to a supported locale, or falls back to the default.
 */
export function asLocale(value: string | undefined): Locale {
	if (value && (locales as readonly string[]).includes(value)) {
		return value as Locale;
	}
	return defaultLocale;
}

/**
 * Parses a versions collection id (`stereo/fr`) into version and locale.
 */
export function parseVersionId(id: string): { version: string; locale: Locale } {
	const [version, locale] = id.split('/');
	return { version, locale: asLocale(locale) };
}

/**
 * Parses a tutorials collection id (`stereo/components/fr`).
 */
export function parseTutorialId(id: string): {
	version: string;
	step: string;
	locale: Locale;
} {
	const [version, step, locale] = id.split('/');
	return { version, step, locale: asLocale(locale) };
}

/**
 * Builds the path segment after the locale prefix (no leading slash).
 */
export function localePath(...segments: string[]): string {
	return segments.filter(Boolean).join('/');
}
