"use client";
import useSWR from "swr";
import Link from "next/link";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { CategoryType } from "@/types/components";
import { API } from "@/models/constants";

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json());

export default function Categories() {
  const { data, error, isLoading } = useSWR(API.categoriesSwrKey, fetcher);

  if (isLoading) return <Cog8ToothIcon className="w-8 h-8 animate-spin" />;

  if (error) {
    return <div>CATEGORIES ARE FAILED MUTHA! THEY-RE FAILEEED!</div>;
  }

  return (
    <div className="flex flex-row font-medium space-x-8 mt-0">
      {data.map((category: CategoryType) => {
        if (category.count) {
          return (
            <div key={category.id}>
              <Link href={API.appPath + API.categoriesPath + category.id}>{category.name}</Link>
            </div>
          );
        }
      })}
    </div>
  );
}
