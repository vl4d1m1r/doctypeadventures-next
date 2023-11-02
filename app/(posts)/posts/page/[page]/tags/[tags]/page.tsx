import Posts from "@/components/Posts";
import { PostParamsType } from "@/types/components";

const TagsRoute = ({ params }: { params: PostParamsType }) => {
  console.log("[TAGS] params === ", params);
  return (
    <section id="posts">
      <Posts page={params.page} tags={params.tags} />
    </section>
  );
};

export default TagsRoute;
