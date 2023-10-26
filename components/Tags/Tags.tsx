'use client'
import useSWR from 'swr'
import { API } from '@/models/constants'


const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json())

export default function Tags() {
    const { data, error, isLoading } = useSWR('tags?per_page=100', fetcher)
    console.log('DATA === ', data)
    return (
        <section>
            <div>
                Tags:
            </div>
        </section>
    )
}