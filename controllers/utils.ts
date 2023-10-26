import { API } from "@/models/constants"

/* 
 * This function converts props object (eg. { page: '1', categories: '2' }) to
 * an API route (eg.  https://.../wp-json/wp/v2/posts/?_embed&slug=1&categories=2 )
 * 
 */
export const convertPropsToApiRoute = (props: {[key: string]: number}) => {
    const propsKeys = Object.keys(props)
    const apiRoute = API.basePath + API.postsPath+ props.page
    return propsKeys.reduce((accumulator: string, key: string) => { 
        accumulator += key !== 'page' ? `&${key}=${props[key]}` : ''; 
        return accumulator}, 
    apiRoute)
}