import { store } from "@/redux-store/store"

export default function Tags() {
    const data = store.getState().tagsData.data
    return (
        <section>
            <div>
                Tags:
                <br /><br />
            </div>
            <div>
                {data.map((tag: any) => {
                    return (
                        <span key={tag.id}>{tag.name} | </span>
                    )
                })}
            </div>
        </section>
    )
}