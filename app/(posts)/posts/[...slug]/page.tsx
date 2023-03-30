'use client'
import useSWR from 'swr'
import { extractUrlParams } from '@/utility/converters'
import { createApiEndpointFromUrlParams } from '@/utility/converters'
import { api } from '@/model/constants'

const fetcher = (path: string) => fetch(api.endpoint + path).then((res) => res.json())
console.log('process.env === ', process.env)

export default function Posts({ params }: { params: { slug: [] } }) {
    const urlParams = extractUrlParams(['page', 'categories', 'tags'], params.slug)
    // console.log('urlParams === ', urlParams)
    const postsEndpoint = createApiEndpointFromUrlParams(urlParams)
    // console.log('xyz === ', xyz)

    const { data, error, isLoading } = useSWR(postsEndpoint, fetcher)

    console.log('data === ', data)

    return <div>My Posts</div>;
}