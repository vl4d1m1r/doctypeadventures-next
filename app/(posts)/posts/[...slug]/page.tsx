'use client'
import useSWR from 'swr'
import { extractUrlParams } from '@/utils/converters'
import { createApiEndpointFromUrlParams } from '@/utils/converters'
import { api } from '@/models/constants'

const fetcher = (path: string) => fetch(api.endpoint + path).then((res) => res.json())
console.log('process.env === ', process.env)

export default function Posts({ params }: { params: { slug: [] } }) {
    const urlParams = extractUrlParams(['page', 'categories', 'tags'], params.slug)
    const postsEndpoint = createApiEndpointFromUrlParams(urlParams)

    const { data, error, isLoading } = useSWR(postsEndpoint, fetcher)

    console.log('data === ', data)

    return <div>My Posts</div>;
}