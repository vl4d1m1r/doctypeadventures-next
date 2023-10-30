"use client";
import { useState } from "react";
import Categories from "../Categories";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <button className="btn-primary" onClick={() => setShowSidebar(!showSidebar)}>
        <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
      </button>
      <aside
        className={`flex justify-center items-center top-0 right-0 w-full h-20 bg-blue-600 text-white fixed z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button className="btn-primary absolute left-2" onClick={() => setShowSidebar(!showSidebar)}>
          <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
        </button>
        <Categories />
      </aside>
    </div>
  );
}
