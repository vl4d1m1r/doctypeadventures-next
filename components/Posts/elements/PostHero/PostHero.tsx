import Link from "next/link";
import Tags from "@/components/Tags";
import PostImage from "../PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { PostType } from "@/types/components";

export default function PostHero({ post }: { post: PostType }) {
  const { imageData, excerptLimited } = ExtractPostData(post, 800);

  return (
    <>
      <div className="relative lg:col-span-2">
        <picture>
          <PostImage imageData={imageData} />
          <div className="image-copyright">{imageData.title.rendered}</div>
        </picture>
      </div>
      <div>
        <div className="mb-2 mx-4 lg:mb-0 lg:ml-0">
          <Link href={`/post/${post.slug}`} className="hover:underline">
            <h4 className="text-color-primary block">{parse(post.title.rendered)}</h4>
          </Link>
          <div className="flex items-center justify-between mt-6">
            <div className="category-small">Coding</div>
            <div>{post.date.substring(0, 10)}</div>
          </div>
          <div className="text-medium text-color-secondary block mt-6">
            {excerptLimited}
            <Link href={`/post/${post.slug}`} className="link ml-2">
              Read more {">>"}
            </Link>
          </div>
          <div className="flex items-center mt-6 text-medium">
            <Tags tagIds={post.tags} />
          </div>
        </div>
      </div>
    </>
  );
}
