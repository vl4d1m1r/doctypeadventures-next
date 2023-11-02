import Link from "next/link";
import Tags from "@/components/Tags";
import PostImage from "../PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { PostType } from "@/types/components";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function PostPreview({ post }: { post: PostType }) {
  const { imageData, excerptLimited } = ExtractPostData(post);

  return (
    <div className="bg-primary h-full relative flex flex-col rounded-xl shadow-md">
      <picture>
        <PostImage imageData={imageData} />
        <div className="image-copyright">{imageData.title.rendered}</div>
      </picture>
      <div className="p-6">
        <Link href={`/post/${post.slug}`} className="hover:underline">
          <h4 className="text-color-primary block">{parse(post.title.rendered)}</h4>
        </Link>
        <div className="flex items-center justify-between mt-6">
          <div className="category-small">Coding</div>
          <div>{post.date.substring(0, 10)}</div>
        </div>
        <div className="text-paragraph text-color-secondary block mt-6 mb-12">
          {excerptLimited}
          <Link href={`/post/${post.slug}`} className="ml-2 link">
            Read more {">>"}
          </Link>
        </div>
        <div className="absolute bottom-6">
          <div className="flex items-center justify-between text-paragraph">
            <Tags tagIds={post.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
