import Link from "next/link";
import Tags from "@/components/Tags";
import Categories from "@/components/Categories";
import PostImage from "../PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { PostType } from "@/types/components";

export default function PostHero({ post }: { post: PostType }) {
  const { imageData, excerptLimited } = ExtractPostData(post, 700);

  return (
    <>
      <div className="hero-picture">
        <picture>
          <PostImage imageData={imageData} />
          <div className="image-copyright">{imageData.title.rendered}</div>
        </picture>
      </div>
      <div className="hero-content">
        <Link href={`/post/${post.slug}`} className="hover:underline">
          <h4 className="text-color-primary block">{parse(post.title.rendered)}</h4>
        </Link>
        <div className="hero-category">
          <Categories categoryId={post.categories[0]} />
          <div>{post.date.substring(0, 10)}</div>
        </div>
        <div className="hero-excerpt">
          {excerptLimited}
          <Link href={`/post/${post.slug}`} className="link ml-2">
            Read more {">>"}
          </Link>
        </div>
        <div className="hero-tags">
          <Tags tagIds={post.tags} />
        </div>
      </div>
    </>
  );
}
