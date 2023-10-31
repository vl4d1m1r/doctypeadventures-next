"use client";
import { useState } from "react";
import Categories from "../Categories";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <button className="btn-primary el-color-primary lg:hidden ml-4" onClick={() => setShowSidebar(!showSidebar)}>
        <Bars3Icon className="icon-primary" />
      </button>
      <aside
        className={`h-20 bg-secondary flex justify-center items-center top-0 right-0 w-full fixed z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button
          className="btn-primary el-color-primary lg:hidden ml-1 absolute left-2"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <XMarkIcon className="icon-primary" />
        </button>
        <Categories />
      </aside>
    </div>
  );
}
