export type MainPageDataType = {
    endPoint: string;
    currentPage?: string | number;
    filterType?: string | boolean;
    filterParameter?: string | boolean;
};

export type HeaderPropsType = {
    dark: boolean;
    changeTheme: boolean
    // changeTheme: Function;
};

export type ErrorType = "general" | "notFound";

export type PaginationDataType =
    | {
        currentPage: string | number;
        filterType: string | boolean;
        filterParameter: string | boolean;
        totalPosts: string;
        totalPages: string;
    }
    | {};

export type SeoType = {
    seo: { image: string; title: string; description: string };
};

export type ExcerptType = string | Element | Element[];

export type DrawerStateType = [boolean, Function];

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
