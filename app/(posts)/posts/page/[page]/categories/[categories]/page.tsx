import Posts from "@/components/Posts";
import { PostParamsType } from "@/types/components";

const CategoriesRoute = ({ params }: { params: PostParamsType }) => {
  console.log("[CATEGORIES] params === ", params);
  return (
    <section id="posts">
      <Posts page={params.page} categories={params.categories} />
    </section>
  );
};

export default CategoriesRoute;
