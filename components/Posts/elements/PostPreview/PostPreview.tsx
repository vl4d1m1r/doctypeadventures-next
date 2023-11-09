import Link from "next/link";
import Tags from "@/components/Tags";
import Categories from "@/components/Categories";
import PostImage from "../PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { PostType } from "@/types/components";

export default function PostPreview({ post }: { post: PostType }) {
  const { imageData, excerptLimited } = ExtractPostData(post);

  return (
    <div className="preview-wrapper">
      <picture>
        <PostImage imageData={imageData} />
        <div className="image-copyright">{imageData.title.rendered}</div>
      </picture>
      <div className="p-6">
        <Link href={`/post/${post.slug}`} className="hover:underline">
          <h4 className="text-color-primary block">{parse(post.title.rendered)}</h4>
        </Link>
        <div className="preview-category">
          <Categories categoryId={post.categories[0]} />
          <div>{post.date.substring(0, 10)}</div>
        </div>
        <div className="preview-excerpt">
          {excerptLimited}
          <Link href={`/post/${post.slug}`} className="ml-2 link">
            Read more {">>"}
          </Link>
        </div>
        <div className="absolute bottom-6">
          <div className="preview-tags">
            <Tags tagIds={post.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
