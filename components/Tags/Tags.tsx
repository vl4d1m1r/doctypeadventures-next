"use client";
import useSWR from "swr";
import Link from "next/link";
import { API } from "@/models/constants";
import { TagType } from "@/types/components";
import { fetcher } from "@/controllers/api";

export default function Tags({ tagIds }: { tagIds?: number[] }) {
  const { data, error, isLoading } = useSWR(API.basePath + API.tagsSwrKey, fetcher);

  if (isLoading) {
    return <div>TAGS ARE LOADIIIIING!!!!</div>;
  }

  if (error) {
    return <div>TAGS ARE FAILED MUTHA! THEY-RE FAILEEED!</div>;
  }

  console.log("DATA === ", data);
  let tags = data;
  let tagClass = "";
  if (tagIds?.length) {
    tagClass = "tag-small";
    tags = tags.filter((tag: { id: number }) => {
      return tagIds.includes(tag.id);
    });
  }

  return (
    <>
      {tags.map((tag: TagType) => {
        if (tag.count) {
          return (
            <Link key={tag.id} href={API.appPath + API.tagsPath + tag.id} className={tagClass}>
              {tag.name}
            </Link>
          );
        }
      })}
    </>
  );
}
