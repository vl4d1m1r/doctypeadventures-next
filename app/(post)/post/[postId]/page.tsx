import Post from "@/components/Post"

const PostRoute = ({ params }: { params: {postId: string } }) => {
    console.log('[POST] params === ', params)
    return (
        <>
            <div>[POST] Route === {params.postId}</div>
            <Post postId={params.postId} />
        </>
    )
}

export default PostRoute