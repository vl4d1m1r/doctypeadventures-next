import Post from "@/components/Post";

const PostRoute = ({ params }: { params: { postId: string } }) => {
  console.log("[POST] params === ", params);
  return (
    <section id="post">
      <Post postId={params.postId} />
    </section>
  );
};

export default PostRoute;
