import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { PostItemType } from "@/types/components";

export default function PostHero({ post }: { post: PostItemType }) {
  const { imageData, excerptLimited } = ExtractPostData(post);

  console.log("POST HERO ITEM post === ", post);

  return (
    <>
      <div className="relative lg:col-span-2">
        <picture>
          <Image
            src={imageData.source_url}
            alt={imageData.title.rendered}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
          <div className="image-copyright">{imageData.title.rendered}</div>
        </picture>
      </div>
      <div>
        <div className="mb-4 lg:mb-0">
          <h4 className="text-h4 text-color-primary block">{parse(post.title.rendered)}</h4>
          <div className="flex items-center justify-between mt-6">
            <div className="category-small">Coding</div>
            <div>{post.date.substring(0, 10)}</div>
          </div>
          <div className="text-paragraph text-color-secondary block mt-6">{excerptLimited}</div>
          <div className="flex items-center mt-6 text-paragraph">
            <Tags tagIds={post.tags} />
          </div>
        </div>
      </div>
    </>
  );
}
