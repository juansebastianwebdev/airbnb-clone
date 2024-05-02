import Link from "next/link";
import Image from "next/image";
import DesktopLogo from "@/public/images/airbnb-desktop.png";
import MobileLogo from "@/public/images/airbnb-mobile.webp";
import SearchNav from "./SearchNav";
import { UserNav } from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between px-5 lg:px-10 py-6">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-[102px] hidden lg:block"
            priority
          />
          <Image
            src={MobileLogo}
            alt="Desktop Logo"
            className="w-[40px] block lg:hidden"
          />
        </Link>

        <SearchNav />

        <UserNav />
      </div>
    </nav>
  );
}
