'use client'
import useSWR from 'swr'
import PostItem from '@/elements/PostItems/PostItem'
import { convertPropsToApiRoute } from '@/controllers/utils'
import { PostParamsType } from "@/types/components"

const fetcher = (path: string) => fetch(path).then((res) => res.json())

export default function Posts(props: PostParamsType) {
    console.log('[POSTS] props === ', props)
    const apiRoute = convertPropsToApiRoute(props)
    const { data, error, isLoading } = useSWR(apiRoute, fetcher)

    if (isLoading) { 
        return (
            <div>POSTS ARE LOADIIIIING!!!!</div>
        )
    }

    if (error) {
        return (
            <div>POSTS ARE FAILED MOTHA! THEY FAILEEED!</div>
        )
    }

    console.log('[POSTS] data === ', data)

    return (
        <section>
            <div>
                Posts:
                {data.map((post: any) => {
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