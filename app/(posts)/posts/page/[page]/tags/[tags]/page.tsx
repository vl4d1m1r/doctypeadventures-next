import Posts from "@/components/Posts";
import { PostParamsType } from "@/types/components";

const TagsRoute = ({ params }: { params: PostParamsType }) => {
  return (
    <section id="posts-tags">
      <Posts page={params.page} tags={params.tags} />
    </section>
  );
};

export default TagsRoute;
