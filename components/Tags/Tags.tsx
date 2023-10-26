'use client'
import useSWR from 'swr'

const apiEndpoint = 'https://vl4di11ir.pw/doctypeadventures/wp-json/wp/v2/'

const fetcher = (path: string) => fetch(apiEndpoint + path).then((res) => res.json())

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