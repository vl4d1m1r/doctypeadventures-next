import Post from "@/components/Post";

const PostRoute = ({ params }: { params: { postId: string } }) => {
  return (
    <section id="post">
      <Post postId={params.postId} />
    </section>
  );
};

export default PostRoute;
