import Posts from "@/components/Posts";
import { PostParamsType } from "@/types/components";

export default function SearchRoute({ params }: { params: PostParamsType }) {
  return (
    <section id="posts-search">
      <Posts page={params.page} search={params.search} />
    </section>
  );
}
