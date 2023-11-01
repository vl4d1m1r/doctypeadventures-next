import Tags from "@/components/Tags";
import PostImage from "@/components/PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { PostItemType } from "@/types/components";

export default function PostItem({ post }: { post: PostItemType }) {
  const { imageData, excerptLimited } = ExtractPostData(post);

  console.log("POST ITEM post === ", post);

  return (
    <div className="bg-primary h-full relative flex flex-col rounded-xl shadow-md">
      <picture>
        <PostImage imageData={imageData} />
        <div className="image-copyright">{imageData.title.rendered}</div>
      </picture>
      <div className="p-6">
        <h4 className="text-h4 text-color-primary block">{parse(post.title.rendered)}</h4>
        <div className="flex items-center justify-between mt-6">
          <div className="category-small">Coding</div>
          <div>{post.date.substring(0, 10)}</div>
        </div>
        <div className="text-paragraph text-color-secondary block mt-6 mb-12">{excerptLimited}</div>
        <div className="absolute bottom-6">
          <div className="flex items-center justify-between text-paragraph">
            <Tags tagIds={post.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
