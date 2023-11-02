"use client";
import useSWR from "swr";
import Link from "next/link";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { API } from "@/models/constants";
import { TagType } from "@/types/components";
import { fetcher } from "@/controllers/api";

export default function Tags({ tagIds }: { tagIds?: number[] }) {
  const { data, error, isLoading } = useSWR(API.basePath + API.tagsSwrKey, fetcher);

  if (isLoading) return <Cog8ToothIcon className="w-6 h-6 animate-spin" />;

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
