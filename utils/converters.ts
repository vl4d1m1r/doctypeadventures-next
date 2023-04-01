import { posts } from "@/models/constants"
import { CategoryType, TagType } from "@/types/system";

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

export const findObjectInArrayById = (id: number, arrayOfObjects: TagType[]) => {
    return arrayOfObjects.filter((object: TagType) => object.id === id)[0]
}

export const findMatchingObjectsInArrayFromArrayOfNumbers = (sourceArray: TagType[], targetArray: number[]) => {
    return sourceArray.filter((tag: TagType) => {
        return targetArray.includes(tag.id);
    });
}

/**
 * Filter the "Uncategorized" "category"
 * @param {Array of Objects} categories - Categories data received from the
 * Wordpress API.
 * @return {Array of Objects} - Categories data without "Uncategorized"
 */
export const filterUncategorized = (categories: [CategoryType]) => {
    return categories.filter((category: CategoryType) => {
        return category.name !== "Uncategorized";
    });
};

/**
 * Converts categories received from the Wordpress to array
 * of strings (category names) with array indexes as category IDs.
 * @param {Array of Objects} categories - Categories data received from the
 * Wordpress API.
 * @return {Array} - Array of strings (category names) with array indexes as
 * category IDs.
export const categoriesToArray = (categories: CategoryType[]) => {
    if (!categories) return [];
    return categories.reduce(
        (accumulator: string[], category: { id: number; name: string }) => {
            accumulator[category.id] = category.name;
            return accumulator;
        },
        []
    );
};
*/