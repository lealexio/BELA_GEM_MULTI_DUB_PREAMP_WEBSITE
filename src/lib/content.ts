import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import { parseTutorialId, parseVersionId } from '../i18n/utils';

/**
 * Returns version entries for a locale, sorted by order.
 */
export async function getVersionsForLocale(
	locale: Locale,
): Promise<CollectionEntry<'versions'>[]> {
	const entries = await getCollection('versions');
	return entries
		.filter((entry) => parseVersionId(entry.id).locale === locale)
		.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Returns a single version entry for a locale and version slug.
 */
export async function getVersionEntry(
	locale: Locale,
	version: string,
): Promise<CollectionEntry<'versions'> | undefined> {
	const entries = await getVersionsForLocale(locale);
	return entries.find((entry) => parseVersionId(entry.id).version === version);
}

/**
 * Returns tutorial steps for a locale and version, sorted by order.
 */
export async function getTutorialsForVersion(
	locale: Locale,
	version: string,
): Promise<CollectionEntry<'tutorials'>[]> {
	const entries = await getCollection('tutorials');
	return entries
		.filter((entry) => {
			const parsed = parseTutorialId(entry.id);
			return parsed.locale === locale && parsed.version === version;
		})
		.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Returns a single tutorial entry for locale, version, and step.
 */
export async function getTutorialEntry(
	locale: Locale,
	version: string,
	step: string,
): Promise<CollectionEntry<'tutorials'> | undefined> {
	const entries = await getTutorialsForVersion(locale, version);
	return entries.find((entry) => parseTutorialId(entry.id).step === step);
}

/**
 * Builds static paths for `[version]` pages in a locale folder.
 */
export async function versionStaticPaths(locale: Locale) {
	const versions = await getVersionsForLocale(locale);
	return versions.map((entry) => ({
		params: { version: parseVersionId(entry.id).version },
	}));
}

/**
 * Builds static paths for `[step]` pages in a locale folder.
 */
export async function stepStaticPaths(locale: Locale) {
	const tutorials = await getCollection('tutorials');
	return tutorials
		.filter((entry) => parseTutorialId(entry.id).locale === locale)
		.map((entry) => {
			const { version, step } = parseTutorialId(entry.id);
			return { params: { version, step } };
		});
}
