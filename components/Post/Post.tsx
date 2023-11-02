"use client";
import useSWR from "swr";
import Link from "next/link";
import PostImage from "../Posts/elements/PostImage";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import { ExtractPostData } from "@/controllers/utils";
import { API } from "@/models/constants";

const fetcher = (path: string) => fetch(path).then((res) => res.json());

export default function Post({ postId }: { postId: string }) {
  console.log("[POST] postId === ", postId);
  const apiRoute = API.basePath + API.postPath + postId;
  const { data, error, isLoading } = useSWR(apiRoute, fetcher);

  if (isLoading) {
    return <div>POST IS LOADIIIIING!!!!</div>;
  }

  if (error) {
    return <div>POST FAILED MUTHA! IT FAILEEED!</div>;
  }

  console.log("[POST] data === ", data);
  const post = data[0];
  const { imageData } = ExtractPostData(post);

  return (
    <div className="grid grid-cols-3 gap-8 my-4 mx-6 xl:mx-0">
      <div className="relative col-span-3 lg:col-span-2">
        <div className="block category-small lg:hidden">Coding</div>
        <div className="block text-giant text-color-primary mb-4 lg:hidden">{parse(post.title.rendered)}</div>
        <picture className="relative">
          <PostImage imageData={imageData} />
          <div className="image-copyright">{imageData.title.rendered}</div>
        </picture>
        <div className="mt-6">
          <div className="post-date">{post.date.substring(0, 10)}</div>
        </div>
        <div className="text-paragraph text-color-primary block">{parse(post.content.rendered)}</div>
        <div className="flex items-center mt-6 text-paragraph">
          <Tags tagIds={post.tags} />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="category-small">Coding</div>
        <div className="text-giant text-color-primary mt-6">{parse(post.title.rendered)}</div>
      </div>
    </div>
  );
}
