export default function PostItem({post}: {post: any}) {
    console.log('POST ITEM post === ', post)
    return (
        <section>
            <div>
                Post ID: {post.id}
                <br></br>
                Title: {post.title.rendered}
                <br></br>
                Excerpt: {post.excerpt.rendered}
                <br></br><br></br>
            </div>
        </section>
    )
}