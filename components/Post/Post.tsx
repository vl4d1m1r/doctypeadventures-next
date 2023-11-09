"use client";
import useSWR from "swr";
import Seo from "../Seo";
import Report from "@/components/Report";
import Tags from "@/components/Tags";
import Categories from "../Categories";
import ScrollToTop from "../Posts/elements/ScrollToTop";
import PostImage from "../Posts/elements/PostImage";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { API, reports, appData } from "@/models/constants";

const fetcher = (path: string) => fetch(path).then((res) => res.json());

export default function Post({ postId }: { postId: string }) {
  const apiRoute = API.basePath + API.postPath + postId;
  const { data, error, isLoading } = useSWR(apiRoute, fetcher);

  if (isLoading) return <Report report={reports.loading} />;

  if (error) return <Report report={reports.error} />;

  const post = data[0];
  const { imageData, excerptLimited } = ExtractPostData(post, 700);

  const seoData = {
    title: parse(post.title.rendered) as string,
    description: excerptLimited,
    image: imageData.source_url,
    url: process.env.DOMAIN + API.localPostPath + postId,
  };

  return (
    <>
      {/* Unfortunately, even Next 14 require ScrollToTop for 100% scroll to top every time the page is turned */}
      <ScrollToTop />
      <Seo seoData={seoData} />
      <div className="post-wrapper">
        <div className="post-body">
          <div className="block lg:hidden">
            <Categories categoryId={post.categories[0]} />
          </div>
          <div className="post-title">{parse(post.title.rendered)}</div>
          <picture className="relative">
            <PostImage imageData={imageData} />
            <div className="image-copyright">{imageData.title.rendered}</div>
          </picture>
          <div className="mt-6">
            <div className="post-date">{post.date.substring(0, 10)}</div>
          </div>
          <article className="post-content">{parse(post.content.rendered)}</article>
          <div className="post-tags">
            <Tags tagIds={post.tags} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Categories categoryId={post.categories[0]} />
          <div className="post-title-lg">{parse(post.title.rendered)}</div>
        </div>
      </div>
    </>
  );
}
