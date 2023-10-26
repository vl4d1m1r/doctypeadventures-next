'use client'
import useSWR from 'swr'
import { API } from '@/models/constants'

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json())

export default function Categories() {
    const { data, error, isLoading } = useSWR('categories', fetcher)
    console.log('DATA === ', data)
    return (
        <section>
            <div>
                Categories:
            </div>
        </section>
    )
}