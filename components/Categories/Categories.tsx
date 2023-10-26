'use client'
import useSWR from 'swr'

const apiEndpoint = 'https://vl4di11ir.pw/doctypeadventures/wp-json/wp/v2/'

const fetcher = (path: string) => fetch(apiEndpoint + path).then((res) => res.json())

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