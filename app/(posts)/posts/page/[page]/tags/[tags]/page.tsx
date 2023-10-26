import Posts from "@/components/Posts"
import { PostParamsType } from "@/types/components"

const TagsRoute = ({ params }: { params: PostParamsType }) => {
    console.log('[TAGS] params === ', params)
    return (
        <>
            <div>[TAGS] Route</div>
            <Posts page={params.page} tags={params.tags} />
        </>
    )
}

export default TagsRoute