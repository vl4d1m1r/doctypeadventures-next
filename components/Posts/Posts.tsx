"use client";
import useSWR from "swr";
import Seo from "../Seo";
import PostHero from "./elements/PostHero";
import PostPreview from "./elements/PostPreview";
import Pagination from "./elements/Pagination";
import ScrollToTop from "./elements/ScrollToTop";
import { reports, defaultSeo } from "@/models/constants";
import Report from "@/components/Report";
import { convertPropsToApiRoute } from "@/controllers/utils";
import { postsFetcher } from "@/controllers/api";
import { PostParamsType, PostType } from "@/types/components";

export default function Posts(props: PostParamsType) {
  const apiRoute = convertPropsToApiRoute(props);
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  if (isLoading) return <Report report={reports.loading} />;

  if (error) return <Report report={reports.error} />;

  if (!data?.posts.length) return <Report report={reports.empty} />;

  return (
    <>
      {/* Unfortunately, even Next 14 require ScrollToTop for 100% scroll to top every time the page is turned */}
      <ScrollToTop />
      <Seo seoData={defaultSeo} />
      <div className="posts">
        {data!.posts.map((post: PostType, index: number) => {
          if (index === 0) {
            return <PostHero key={post.id} post={post} />;
          }
          return <PostPreview key={post.id} post={post} />;
        })}
      </div>
      <Pagination currentPage={+props.page} totalPages={+data!.totalPages} filter={props} />
    </>
  );
}
