export type PostParamsType = { page: number; categories?: number; tags?: number };

export type ImageDataType = {
  source_url: string;
  title: { rendered: string };
};

export type PostItemType = {
  excerpt: { rendered: string };
  title: { rendered: string };
  date: string;
  tags: number[];
  _embedded: {
    "wp:featuredmedia": [{ imageData: ImageDataType; source_url: string; title: { rendered: string } }];
  };
};
