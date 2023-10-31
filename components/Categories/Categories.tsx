"use client";
import useSWR from "swr";
import Link from "next/link";
import { API } from "@/models/constants";

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json());

export default function Categories() {
  const { data, error, isLoading } = useSWR(API.categoriesSwrKey, fetcher);

  if (isLoading) {
    return <div>CATEGORIES ARE LOADIIIIING!!!!</div>;
  }

  if (error) {
    return <div>CATEGORIES ARE FAILED MUTHA! THEY-RE FAILEEED!</div>;
  }

  console.log("DATA === ", data);

  return (
    <div className="flex flex-row font-medium space-x-8 mt-0">
      {data.map((category: any) => {
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
