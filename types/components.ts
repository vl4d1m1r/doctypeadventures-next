export type PostParamsType = { page: number; categories?: number; tags?: number };

export type ImageDataType = {
  source_url: string;
  title: { rendered: string };
};

export type PostType = {
  id: number;
  author: number;
  slug: string;
  featured_media: number;
  link: string;
  excerpt: { rendered: string };
  title: { rendered: string };
  date: string;
  modified: string;
  tags: number[];
  type: string;
  _embedded: {
    "wp:featuredmedia": [{ imageData: ImageDataType; source_url: string; title: { rendered: string } }];
  };
};

export type CategoryType = {
  id: number;
  name: string;
  count: number;
};

export type TagType = {
  id: number;
  name: string;
  count: number;
};

export type ReportPropType = {
  type: string;
  messages: string[];
  animation: string;
};

export enum ReportTypes {
  LOADING = "loading",
  ERROR = "error",
  NOT_FOUND = "notFound",
}
