import Posts from "@/components/Posts"
import { PostParamsType } from "@/types/components"

const CategoriesRoute = ({ params }: { params: PostParamsType }) => {
    console.log('[CATEGORIES] params === ', params)
    return (
        <>
            <div>[CATEGORIES] Route</div>
            <Posts page={params.page} categories={params.categories} />
        </>
    )
}

export default CategoriesRoute