import Link from "next/link";
import Categories from "@/components/Categories";
import Search from "./elements/Search";
import Sidebar from "./elements/Sidebar";
import ThemeToggler from "./elements/ThemeToggler";
import Image from "next/image";
import logoCircle from "@/public/assets/images/bitmap/logo-doctype-circle.jpg";
import logoTextLight from "@/public/assets/images/bitmap/logo-doctype-text-light.png";
import logoTextDark from "@/public/assets/images/bitmap/logo-doctype-text-dark.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="h-align lg:order-1">
          <div className="lg:hidden">
            <Sidebar>
              <Categories />
              <div className="h-align my-4 lg:order-3 sm:hidden">
                <Search />
                <ThemeToggler />
              </div>
            </Sidebar>
          </div>
          <Link href="/" className="h-align">
            <Image src={logoCircle} alt="logo circle" className="logo-circle" />
            <span className="logo">
              <Image src={logoTextDark} alt="logo text" className="logo-text-dark" />
              <Image src={logoTextLight} alt="logo text" className="logo-text-light" />
            </span>
          </Link>
        </div>
        <div className="h-align mr-4 lg:order-3 hidden sm:flex">
          <Search />
          <ThemeToggler />
        </div>
        <div className="header-categories">
          <Categories />
        </div>
      </nav>
    </header>
  );
}
