import Image from "next/image";
import searchSvg from "@/public/assets/images/vector/search.svg";

export default function Search() {
  return (
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <Image src={searchSvg} alt="search icon" />
      </div>
      <input type="text" className="input-primary el-color-primary" placeholder="Search..." />
    </div>
  );
}
