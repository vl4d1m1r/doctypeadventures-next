const postsPerPage = 6

export const API = {
    basePath: 'https://vl4di11ir.pw/doctypeadventures/wp-json/wp/v2/',
    postsPath: `posts?_embed&per_page=${postsPerPage}&page=`,
    postPath: "posts/?_embed&slug="
}

export const settings = {
    postsPerPage
}