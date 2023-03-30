import { posts } from "@/model/constants"

export const extractUrlParams = (keys: string[], params: string[]) => {
    return keys.reduce((accumulator, key: string) => {
        const valueIndex = params.indexOf(key) >= 0 ? params.indexOf(key) + 1 : false
        return { ...accumulator, [key]: valueIndex ? params[valueIndex] : valueIndex }
    }, {})
}

export const createApiEndpointFromUrlParams = (urlParams: { [key: string]: string }) => {
    return Object.keys(urlParams).reduce((accumulator: string, key: string) => {
        let calculatedEndpoint = accumulator
        if (key === 'page') {
            calculatedEndpoint += `posts?_embed=&per_page=${posts.perPage}&page=${urlParams[key]}`
        }
        if (urlParams[key]) {
            calculatedEndpoint += `&${key}=${urlParams[key]}`
        }
        return calculatedEndpoint
    }, '')
}