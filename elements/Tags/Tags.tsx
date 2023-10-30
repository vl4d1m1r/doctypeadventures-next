'use client'
import useSWR from 'swr'
import Link from 'next/link'
import { API } from '@/models/constants'

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json())

export default function Tags() {
    const { data, error, isLoading } = useSWR(API.tagsSwrKey, fetcher)

    if (isLoading) { 
        return (
            <div>TAGS ARE LOADIIIIING!!!!</div>
        )
    }

    if (error) {
        return (
            <div>TAGS ARE FAILED MUTHA! THEY-RE FAILEEED!</div>
        )
    }

    console.log('DATA === ', data)

    return (
        <section>
            <div>
                <div>Tags:</div>
                {data.map((tag: any) => {
                    if (tag.count) {
                        return (
                            <Link key={tag.id} href={API.appPath + API.tagsPath + tag.id}>
                                [ {tag.name} ] &nbsp;&nbsp;
                            </Link>
                        )
                    }
                })}
            </div>
        </section>
    )
}