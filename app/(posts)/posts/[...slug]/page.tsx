import Posts from '@/components/Posts';

import { extractUrlParams, createApiEndpointFromUrlParams } from '@/utils/converters'

const PostsRoute = ({ params }: { params: { slug: [] } }) => {
    const urlParams = extractUrlParams(['page', 'categories', 'tags'], params.slug)
    const postsEndpoint = createApiEndpointFromUrlParams(urlParams)
    console.log('postsEndpoint === ', postsEndpoint)
    return (
        <Posts postsEndpoint={postsEndpoint} />
    )
}

export default PostsRoute