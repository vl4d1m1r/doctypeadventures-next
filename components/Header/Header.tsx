import Link from "next/link";
import Categories from "@/components/Categories";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import ThemeToggler from "@/components/ThemeToggler";
import Image from "next/image";
import logoCircle from "@/public/assets/images/bitmap/logo-doctype-circle.jpg";
import logoTextLight from "@/public/assets/images/bitmap/logo-doctype-text-light.png";
import logoTextDark from "@/public/assets/images/bitmap/logo-doctype-text-dark.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <nav className="h-20 bg-primary border-b">
        <div className="h-20 wrapper flex items-center flex-wrap justify-between">
          <div className="h-align lg:order-1">
            <div className="lg:hidden">
              <Sidebar />
            </div>
            <Link href="/" className="h-align">
              <Image src={logoCircle} alt="logo circle" className="w-12 h-12 rounded-full" />
              <span className="hidden h-10 w-auto md:block">
                <Image src={logoTextDark} alt="logo text" className="hidden h-10 w-auto dark:block" />
                <Image src={logoTextLight} alt="logo text" className="h-10 w-auto dark:hidden" />
              </span>
            </Link>
          </div>
          <div className="h-align mr-4 lg:order-3">
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
