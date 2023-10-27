const postsPerPage = 6
const tagsPerPage = 100

export const API = {
    basePath: 'https://vl4di11ir.pw/doctypeadventures/wp-json/wp/v2/',
    postsPath: `posts?_embed&per_page=${postsPerPage}&page=`,
    postPath: "posts/?_embed&slug=",
    appPath: "http://localhost:3000/",
    categoriesPath: "posts/page/1/categories/",
    categoriesSwrKey: 'categories',
    tagsPath: "posts/page/1/tags/",
    tagsSwrKey: `tags?per_page=${tagsPerPage}`
}

export const settings = {
    postsPerPage
}