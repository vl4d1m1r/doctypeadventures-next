export type PaginationPropsType = {
    currentPage: number, 
    totalPages: number, 
    filter: {page: number, categories?: number, tags?: number}
}