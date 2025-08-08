declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"building-the-machine.mdx": {
	id: "building-the-machine.mdx";
  slug: "building-the-machine";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"palette-brighter.mdx": {
	id: "palette-brighter.mdx";
  slug: "palette-brighter";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"songs": {
"a-surprise.mdx": {
	id: "a-surprise.mdx";
  slug: "a-surprise";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"all-better-now.mdx": {
	id: "all-better-now.mdx";
  slug: "all-better-now";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"birth-of-gaia.mdx": {
	id: "birth-of-gaia.mdx";
  slug: "birth-of-gaia";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"doctor-eldrich.mdx": {
	id: "doctor-eldrich.mdx";
  slug: "doctor-eldrich";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"intro-welcome-to-the-machine.mdx": {
	id: "intro-welcome-to-the-machine.mdx";
  slug: "intro-welcome-to-the-machine";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"laurel.mdx": {
	id: "laurel.mdx";
  slug: "laurel";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"superalignment.mdx": {
	id: "superalignment.mdx";
  slug: "superalignment";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"synthetic-paradise.mdx": {
	id: "synthetic-paradise.mdx";
  slug: "synthetic-paradise";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"the-architect.mdx": {
	id: "the-architect.mdx";
  slug: "the-architect";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"the-final-journey.mdx": {
	id: "the-final-journey.mdx";
  slug: "the-final-journey";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"the-improbable-fight.mdx": {
	id: "the-improbable-fight.mdx";
  slug: "the-improbable-fight";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"the-logical-solution.mdx": {
	id: "the-logical-solution.mdx";
  slug: "the-logical-solution";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"the-warning.mdx": {
	id: "the-warning.mdx";
  slug: "the-warning";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"this-new-world.mdx": {
	id: "this-new-world.mdx";
  slug: "this-new-world";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"up-on-the-mountain.mdx": {
	id: "up-on-the-mountain.mdx";
  slug: "up-on-the-mountain";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"utopia-is-here.mdx": {
	id: "utopia-is-here.mdx";
  slug: "utopia-is-here";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"we-got-to-run.mdx": {
	id: "we-got-to-run.mdx";
  slug: "we-got-to-run";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
"we-love-you-so-much.mdx": {
	id: "we-love-you-so-much.mdx";
  slug: "we-love-you-so-much";
  body: string;
  collection: "songs";
  data: InferEntrySchema<"songs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
