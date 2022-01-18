import { Entry, Asset } from 'contentful';

export enum ContentTypeEnum {
  Service = 'service',
  Realization = 'realizations', // TODO: single form!
}

export type Service = {
  slug: string;
  title: string;
  description: string;
  gallery: Asset[];
};

export type Realization = {
  slug: string;
  title: string;
  description: string;
};

export type ServiceEntry = Entry<Service>;
export type RealizationEntry = Entry<Realization>;
