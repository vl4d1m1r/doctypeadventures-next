'use client'
import useSWR from 'swr'
import Link from 'next/link'
import { API } from '@/models/constants'

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json())

export default function Categories() {
    const { data, error, isLoading } = useSWR(API.categoriesSwrKey, fetcher)

    if (isLoading) { 
        return (
            <div>CATEGORIES ARE LOADIIIIING!!!!</div>
        )
    }

    if (error) {
        return (
            <div>CATEGORIES ARE FAILED MUTHA! THEY-RE FAILEEED!</div>
        )
    }

    console.log('DATA === ', data)

    return (
        <section>
            <div>
                <div>Categories:</div>
                {data.map((category: any) => {
                    if (category.count) {
                        return (
                            <Link key={category.id} href={API.appPath + API.categoriesPath + category.id}>
                                [ {category.name} ] &nbsp;&nbsp;
                            </Link>
                        )
                    }
                })}
            </div>
        </section>
    )
}