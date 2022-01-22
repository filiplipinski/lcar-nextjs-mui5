import { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export enum ContentTypeEnum {
  Service = 'service',
  Realization = 'realizations', // TODO: single form!
}

// properties with unefined, because in contentful you can create Service, but do not fill required fields and save it
// then those properties are undefined in code and build fails
export type Service = {
  slug: string;
  title?: string;
  introduction?: Document;
  mainImage?: Asset;
  content?: Document;
  gallery?: Asset[];
};

export type Realization = {
  slug: string;
  isMainRealization: boolean;
  shortDescription?: string;
  title?: string;
  introduction?: Document;
  mainImage?: Asset;
  content?: Document;
  gallery?: Asset[];
};
