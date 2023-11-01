export type PostParamsType = { page: number; categories?: number; tags?: number };

export type PostItemType = {
  excerpt: { rendered: string };
  title: { rendered: string };
  date: string;
  tags: number[];
  _embedded: {
    "wp:featuredmedia": [
      { imageData: { title: { rendered: string } }; source_url: string; title: { rendered: string } }
    ];
  };
};
