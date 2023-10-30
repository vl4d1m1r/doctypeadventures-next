import Link from "next/link";
import Categories from "@/elements/Categories";
import Search from "@/elements/Search";
import Sidebar from "@/elements/Sidebar";
import ThemeToggler from "@/elements/ThemeToggler";
import Image from "next/image";
import logoCircle from "@/public/assets/images/bitmap/logo-doctype-circle.jpg";
import logoTextLight from "@/public/assets/images/bitmap/logo-doctype-text-light.png";
import logoTextDark from "@/public/assets/images/bitmap/logo-doctype-text-dark.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <nav className="h-20 bg-white border-gray-200 border-b dark:bg-gray-800 dark:border-gray-800">
        <div className="flex h-20 flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center space-x-4 lg:order-1">
            <div className="lg:hidden">
              <Sidebar />
            </div>
            <Link href="/" className="flex items-center space-x-4">
              <Image src={logoCircle} alt="logo circle" className="w-12 h-12 rounded-full" />
              <span className="hidden h-10 w-auto md:block">
                <Image src={logoTextDark} alt="logo text" className="hidden h-10 w-auto dark:block" />
                <Image src={logoTextLight} alt="logo text" className="h-10 w-auto dark:hidden" />
              </span>
            </Link>
          </div>
          <div className="flex items-center mr-4 space-x-4 lg:order-3">
            <Search />
            <ThemeToggler />
          </div>
          <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-2">
            <Categories />
          </div>
        </div>
      </nav>
    </header>
  );
}
