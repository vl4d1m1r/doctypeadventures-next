"use client";
import useSWR from "swr";
import { reports } from "@/models/constants";
import Report from "@/components/Report";
import Tags from "@/components/Tags";
import Categories from "../Categories";
import ScrollToTop from "../Posts/elements/ScrollToTop";
import PostImage from "../Posts/elements/PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { API } from "@/models/constants";

const fetcher = (path: string) => fetch(path).then((res) => res.json());

export default function Post({ postId }: { postId: string }) {
  const apiRoute = API.basePath + API.postPath + postId;
  const { data, error, isLoading } = useSWR(apiRoute, fetcher);

  if (isLoading) return <Report report={reports.loading} />;

  if (error) return <Report report={reports.error} />;

  const post = data[0];
  const { imageData } = ExtractPostData(post);

  return (
    <>
      {/* Unfortunately, even Next 14 require ScrollToTop for 100% scroll to top every time the page is turned */}
      <ScrollToTop />
      <div className="grid grid-cols-3 gap-8 my-4 mx-6 xl:mx-0">
        <div className="relative col-span-3 lg:col-span-2">
          <div className="block lg:hidden">
            <Categories categoryId={post.categories[0]} />
          </div>
          <div className="text-giant text-color-primary block mb-4 lg:hidden">{parse(post.title.rendered)}</div>
          <picture className="relative">
            <PostImage imageData={imageData} />
            <div className="image-copyright">{imageData.title.rendered}</div>
          </picture>
          <div className="mt-6">
            <div className="post-date">{post.date.substring(0, 10)}</div>
          </div>
          <div className="text-medium text-color-primary block">{parse(post.content.rendered)}</div>
          <div className="flex items-center mt-6 text-medium">
            <Tags tagIds={post.tags} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Categories categoryId={post.categories[0]} />
          <div className="text-giant text-color-primary mt-6">{parse(post.title.rendered)}</div>
        </div>
      </div>
    </>
  );
}
