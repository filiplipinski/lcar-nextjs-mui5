import { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export enum ContentTypeEnum {
  Service = 'service',
  Realization = 'realizations', // TODO: single form!
}

export type Service = {
  slug: string;
  title: string;
  introduction: Document;
  mainImage: Asset;
  content: Document;
  gallery: Asset[];
};

export type Realization = {
  slug: string;
  title: string;
  description: string;
};
