import { createClient } from 'contentful';
import { ContentTypeEnum, Service, Realization } from './types';
// DOCS: https://contentful.github.io/contentful.js

// jakie properties mozndac podać do query: https://www.contentful.com/developers/docs/android/tutorials/advanced-filtering-and-searching/
const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_TOKEN,
});

export const getService = async (slug: string): Promise<Service | null> => {
  const query = {
    limit: 1,
    include: 1, // to jest liczba zagniezdzen
    content_type: ContentTypeEnum.Service,
    'fields.slug': slug,
  };

  try {
    const { items } = await client.getEntries<Service>(query);

    return items.length ? items[0].fields : null;
  } catch (err) {
    console.error('error in api.ts -> getService', err);

    return null;
  }
};

export const getAllServices = async (limit?: number, omitSlug?: string): Promise<Realization[]> => {
  const query = {
    limit: limit ?? 10,
    include: 1,
    order: '-sys.createdAt',
    content_type: ContentTypeEnum.Service,
    ...(omitSlug ? { 'fields.slug[nin]': omitSlug } : {}),
  };

  try {
    const { items } = await client.getEntries<Service>(query);

    const services = items.map((item) => item.fields);

    return services;
  } catch (err) {
    console.error('error in api.ts -> getAllServices', err);
    return [];
  }
};

export const getRealization = async (slug: string): Promise<Realization | null> => {
  const query = {
    limit: 1,
    include: 1,
    content_type: ContentTypeEnum.Realization,
    'fields.slug': slug,
  };

  try {
    const { items } = await client.getEntries<Realization>(query);

    return items.length ? items[0].fields : null;
  } catch (err) {
    console.error('error in api.ts -> getRealization', err);

    return null;
  }
};

export const getHomePageRealizations = async (): Promise<Realization[]> => {
  const bestRealizationsQuery = {
    limit: 3,
    include: 1,
    order: 'sys.createdAt', // 3 best from oldest, 3 bo jezeli ktos zapomni usunac isMainRealization
    content_type: ContentTypeEnum.Realization,
    'fields.isMainRealization': true,
  };

  const newestRealizationQuery = {
    limit: 1,
    include: 1,
    order: '-sys.createdAt', // newest
    content_type: ContentTypeEnum.Realization,
    'fields.isMainRealization': false, // najnowszy nie moze byc "best", bo juz tam bedzie :)
  };

  try {
    const [bestRealizationsEntry, newestRealizationEntry] = await Promise.all([
      client.getEntries<Realization>(bestRealizationsQuery),
      client.getEntries<Realization>(newestRealizationQuery),
    ]);

    const realizations = [
      ...bestRealizationsEntry.items.map((item) => item.fields),
      ...(newestRealizationEntry.items?.[0]?.fields
        ? [newestRealizationEntry.items[0].fields]
        : []),
    ];

    return realizations;
  } catch (err) {
    console.error('error in api.ts -> getHomePageRealizations', err);

    return [];
  }
};

export const getAllRealizations = async (
  limit?: number,
  omitSlug?: string
): Promise<Realization[]> => {
  const query = {
    limit: limit ?? 100,
    include: 1,
    order: '-sys.createdAt',
    content_type: ContentTypeEnum.Realization,
    ...(omitSlug ? { 'fields.slug[nin]': omitSlug } : {}),
  };

  try {
    const { items } = await client.getEntries<Realization>(query);

    const realizations = items.map((item) => item.fields);

    return realizations;
  } catch (err) {
    console.error('error in api.ts -> getAllRealizations', err);
    return [];
  }
};

export const getRealizationSlugs = async (): Promise<string[]> => {
  const query = {
    limit: 100,
    include: 0,
    order: '-sys.createdAt',
    content_type: ContentTypeEnum.Realization,
    'fields.slug[exists]': true, // slug musi istnieć
  };

  try {
    const { items } = await client.getEntries<Realization>(query);

    const slugs = items.map((item) => item.fields.slug).filter(Boolean);

    return slugs;
  } catch (err) {
    console.error('error in api.ts -> getRealizationSlugs', err);
    return [];
  }
};
