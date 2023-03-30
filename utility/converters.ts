export const extractUrlParams = (keys: string[], params: string[]) => {
    return keys.reduce((accumulator, key: string) => {
        const valueIndex = params.indexOf(key) >= 0 ? params.indexOf(key) + 1 : false
        return { ...accumulator, [key]: valueIndex ? params[valueIndex] : valueIndex }
    }, {})
}

export const createApiEndpointFromUrlParams = (urlParams: { [key: string]: string }) => {
    const apiEndpoint = process.env.API_ENDPOINT || ''
    Object.keys(urlParams).reduce((accumulator: string, key: string) => {
        return ""
    }, apiEndpoint)
}