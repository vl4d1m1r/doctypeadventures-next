import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";

export default function PostItem({ post }: { post: any }) {
  const imageData = post._embedded["wp:featuredmedia"][0];
  const excerpt: any = parse(post.excerpt.rendered);
  const excerptFirstParagraph = excerpt[0].props.children;
  const excerptLimited = excerptFirstParagraph.slice(0, 250) + (excerptFirstParagraph.length > 250 ? "..." : "");

  console.log("POST ITEM post === ", post);

  return (
    <div className="bg-primary h-full relative flex flex-col rounded-xl shadow-md">
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
