'use client'
import useSWR from 'swr'
import { API } from "@/models/constants"

const fetcher = (path: string) => fetch(path).then((res) => res.json())

export default function Post({postId}: {postId: string}) {
    console.log('[POST] postId === ', postId)
    const apiRoute = API.basePath + API.postPath+ postId
    const { data, error, isLoading } = useSWR(apiRoute, fetcher)

    if (isLoading) { 
        return (
            <div>POST IS LOADIIIIING!!!!</div>
        )
    }

    if (error) {
        return (
            <div>POST FAILED MOTHA! IT FAILEEED!</div>
        )
    }

    console.log('[POST] data === ', data)

    return (
        <section>
            <div>
                Post:
                <br></br>
                {data[0].title.rendered}
            </div>
        </section>
    )
}