import { Entry, Asset } from 'contentful';

export enum ContentTypeEnum {
  Service = 'service',
  Realization = 'realizations', // TODO: single form!
}

export type ServiceEntry = Entry<{
  slug: string;
  title: string;
  description: string;
  gallery: Asset[];
}>;

export type RealizationEntry = Entry<{
  slug: string;
  title: string;
  description: string;
}>;
