import Posts from "@/components/Posts"

const PageRoute = ({ params }: { params: {page: number } }) => {
    console.log('[PAGE] params === ', params)
    return (
        <>
            <div>[PAGE] Route</div>
            <Posts page={params.page} />
        </>
    )
}

export default PageRoute