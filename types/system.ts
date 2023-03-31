export type CategoryType = {
    id: number;
    name: string;
    count: number;
    description: string;
    link: string;
    meta: [];
    parent: number;
    slug: string;
    taxonomy: string;
};

export type TagType = {
    id: number;
    name: string;
    count: number;
    description: string;
    link: string;
    meta: [];
    slug: string;
    taxonomy: string;
};

export type AppContextType = {
    categories: CategoryType[];
    tags: TagType[];
};

export type GlobalContextType = {
    state: AppContextType;
    dispatch: ({ }) => void;
};

export type ReducerStateType = { categories: CategoryType[]; tags: TagType[] };

export type ReducerActionType = { type: string; payload: string };
