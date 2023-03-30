'use client'
import { extractUrlParams } from '@/utility/converters'

export default function Posts({ params }: { params: { slug: [] } }) {
    const urlParams = extractUrlParams(['page', 'filter'], params.slug)
    // console.log('xyz === ', xyz)
    return <div>My Posts</div>;
}