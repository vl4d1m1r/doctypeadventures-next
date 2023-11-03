import Posts from "@/components/Posts";
import { PostParamsType } from "@/types/components";

export default function CategoriesRoute({ params }: { params: PostParamsType }) {
  return (
    <section id="posts-categories">
      <Posts page={params.page} categories={params.categories} />
    </section>
  );
}
