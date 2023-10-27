'use client'
import useSWR from 'swr'
import PostItem from '@/elements/PostItems/PostItem'
import { convertPropsToApiRoute } from '@/controllers/utils'
import { postsFetcher } from '@/controllers/api'
import { PostParamsType } from "@/types/components"

export default function Posts(props: PostParamsType) {
    console.log('[POSTS] props === ', props)

    const apiRoute = convertPropsToApiRoute(props)
    const { data, error, isLoading } = useSWR(apiRoute, postsFetcher)

    if (isLoading) { 
        return (
            <div>POSTS ARE LOADIIIIING!!!!</div>
        )
    }

    if (error) {
        return (
            <div>POSTS ARE FAILED MUTHA! THEY-RE FAILEEED!</div>
        )
    }

    console.log('[POSTS] data === ', data)

    return (
        <section>
            <div>
                Posts:
                {data!.posts.map((post: any) => {
                    return (
                        <div key={post.id}>
                           <PostItem post={post} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}