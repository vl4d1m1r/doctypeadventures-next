"use client";
import { useRouter } from "next/navigation";
import { API } from "@/models/constants";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const router = useRouter();
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const inputElement = e.target as HTMLInputElement; // For Typescript sake!
    router.push(API.appPath + API.searchPath + inputElement.value);
  };

  return (
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-4 h-4 text-color-primary" />
      </div>
      <input type="text" className="input-primary el-color-primary" placeholder="Search..." onKeyDown={handleSearch} />
    </div>
  );
}
