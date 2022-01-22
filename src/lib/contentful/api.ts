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
    include: 10, // to jest chyba liczba zagniezdzen
    content_type: ContentTypeEnum.Service,
    'fields.slug': slug,
  };

  // TODO later: add try/catch i obsluge bledow
  // TODO: buildUrl() po stronie API a nie w kliencie
  const { items } = await client.getEntries<Service>(query);

  return items.length ? items[0].fields : null;
};

export const getRealization = async (slug: string): Promise<Realization | null> => {
  const query = {
    limit: 1,
    include: 10,
    content_type: ContentTypeEnum.Realization,
    'fields.slug': slug,
  };
  const { items } = await client.getEntries<Realization>(query);

  return items.length ? items[0].fields : null;
};

export const getHomePageRealizations = async (): Promise<Realization[]> => {
  const bestRealizationsQuery = {
    limit: 3,
    include: 10,
    content_type: ContentTypeEnum.Realization,
    'fields.isMainRealization': true,
  };

  const newestRealizationQuery = {
    limit: 1,
    include: 10,
    order: '-sys.createdAt', // newest
    content_type: ContentTypeEnum.Realization,
    'fields.isMainRealization': false, // najnowszy nie moze byc "best", bo juz tam bedzie :)
  };

  const [bestRealizationsEntry, newestRealizationEntry] = await Promise.all([
    client.getEntries<Realization>(bestRealizationsQuery),
    client.getEntries<Realization>(newestRealizationQuery),
  ]);

  const realizations = [
    ...bestRealizationsEntry.items.map((item) => item.fields),
    ...(newestRealizationEntry.items?.[0]?.fields ? [newestRealizationEntry.items[0].fields] : []),
  ];

  return realizations;
};

export const getAllRealizations = async (): Promise<Realization[]> => {
  const query = {
    limit: 100,
    include: 10,
    order: '-sys.createdAt',
    content_type: ContentTypeEnum.Realization,
  };

  const { items } = await client.getEntries<Realization>(query);

  const realizations = items.map((item) => item.fields);

  return realizations;
};
