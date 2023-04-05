export type PostType = {
    id: number;
    _embedded: {
        "wp:featuredmedia": [{ source_url: string; title: { rendered: string } }];
    };
    title: { rendered: string };
    categories: [0];
    date: string;
    content: { rendered: string };
    tags: [{ id: number }];
    slug: string;
    excerpt: { rendered: string };
};