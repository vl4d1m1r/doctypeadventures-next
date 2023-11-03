"use client";
import useSWR from "swr";
import Link from "next/link";
import { deepCloneArray } from "@/controllers/utils";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { CategoryType } from "@/types/components";
import { API } from "@/models/constants";
import "./style.css";

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json());

export default function Categories({ categoryId }: { categoryId?: number }) {
  const { data, error, isLoading } = useSWR(API.categoriesSwrKey, fetcher);

  if (isLoading) return <Cog8ToothIcon className="icon-large animate-spin" />;

  if (error) return <FaceFrownIcon className="icon-large animate-bounce" />;

  let categories = deepCloneArray(data);
  if (categoryId) {
    categories = categories.filter((category: CategoryType) => category.id === categoryId);
  }
  const isSingleCategory = categories.length === 1;

  return (
    <div className="flex flex-row font-medium space-x-8 mt-0">
      {categories.map((category: CategoryType) => {
        if (category.count) {
          return (
            <div
              key={category.id}
              // category-default is fallback because of the Next - Tailwind inability to process dynamic definitions
              className={isSingleCategory ? `category category-default category-${category.name}` : "category"}
            >
              <Link href={API.appPath + API.categoriesPath + category.id}>{category.name}</Link>
            </div>
          );
        }
      })}
    </div>
  );
}
