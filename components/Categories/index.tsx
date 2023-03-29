import { store } from "@/redux-store/store"

export default function Categories() {
    const data = store.getState().categoriesData.data
    // console.log('data from DisplayReduxState === ', data)
    return (
        <section className="box-with-border">
            <div>
                Categories:
                <br /><br />
            </div>
            <div>
                {data.map((category: any) => {
                    return (
                        <span key={category.id}>{category.name} | </span>
                    )
                })}
            </div>
        </section>
    )
}