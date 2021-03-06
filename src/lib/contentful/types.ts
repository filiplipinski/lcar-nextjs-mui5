import { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export enum ContentTypeEnum {
  Service = 'service',
  Realization = 'realization',
}

// properties with unefined, because in contentful you can create Service, but do not fill required fields and save it
// then those properties are undefined in code and build fails
export type Service = {
  slug: string;
  title?: string;
  introduction?: string;
  mainImage?: Asset;
  content?: Document;
  gallery?: Asset[];
};

export type Realization = {
  slug: string;
  isMainRealization?: boolean; // only for homepage
  title?: string;
  introduction?: string;
  mainImage?: Asset;
  content?: Document;
  gallery?: Asset[];
};
