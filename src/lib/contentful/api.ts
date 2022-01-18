import { createClient, Entry } from 'contentful';
import { ContentTypeEnum, RealizationEntry, ServiceEntry, Service, Realization } from './types';
// DOCS: https://contentful.github.io/contentful.js

const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_TOKEN,
});

export const getServiceEntry = async (slug: string): Promise<ServiceEntry | null> => {
  const query = {
    limit: 1,
    include: 10, // to jest chyba liczba zagniezdzen
    content_type: ContentTypeEnum.Service,
    'fields.slug': slug,
  };

  // TODO later: add try/catch i obsluge bledow
  // TODO: inaczej ta destrukturyzacje
  const {
    items: [service],
  } = await client.getEntries<Service>(query);

  // TODO: a moze tu od razu zwracac fields
  return service || null;
};

export const getRealizationEntry = async (slug: string): Promise<RealizationEntry | null> => {
  const query = {
    limit: 1,
    include: 10,
    content_type: ContentTypeEnum.Realization,
    'fields.slug': slug,
  };
  const {
    items: [realization],
  } = await client.getEntries<Realization>(query);

  return realization || null;
};

export const getRealizationsEntries = async (): Promise<Entry<RealizationEntry>[] | null> => {
  const query = {
    limit: 8,
    include: 10,
    content_type: ContentTypeEnum.Realization,
  };
  const { items } = await client.getEntries<RealizationEntry>(query);

  return items || null;
};
