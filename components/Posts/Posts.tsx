"use client";
import useSWR from "swr";
import PostHero from "./elements/PostHero";
import PostPreview from "./elements/PostPreview";
import Pagination from "./elements/Pagination";
import { convertPropsToApiRoute } from "@/controllers/utils";
import { postsFetcher } from "@/controllers/api";
import { PostParamsType, PostType } from "@/types/components";

export default function Posts(props: PostParamsType) {
  console.log("[POSTS] props === ", props);

  const apiRoute = convertPropsToApiRoute(props);
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  if (isLoading) {
    return <div>POSTS ARE LOADIIIIING MUTHA!!!!</div>;
  }

  if (error) {
    return <div>POSTS ARE FAILED MUTHA! THEY-RE FAILEEED!</div>;
  }

  console.log("[POSTS] data === ", data);

  return (
    <>
      <div className="flex flex-col my-4 gap-4 lg:gap-8 lg:grid lg:grid-cols-3">
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
