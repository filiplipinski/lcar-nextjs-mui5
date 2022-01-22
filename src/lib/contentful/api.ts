import { createClient } from 'contentful';
import { ContentTypeEnum, Service, Realization } from './types';
// DOCS: https://contentful.github.io/contentful.js

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

export const getRealizationsEntries = async (): Promise<Realization[] | null> => {
  const query = {
    limit: 8,
    include: 10,
    content_type: ContentTypeEnum.Realization,
  };
  const { items } = await client.getEntries<Realization>(query);

  const realizations = items.map((item) => item.fields);

  return realizations.length ? realizations : null;
};
