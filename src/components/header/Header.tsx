import Link from "next/link";
import Image from "next/image";

import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";

import Logo from "@/images/logo.png";
import CartIcon from "@/images/cartIcon.png";

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* LOGO */}
        <Link
          href="/"
          className="px-2 border border-transparent hover:border-white cursor-pointer transition duration-300 flex justify-center items-center h-[70%]"
        >
          <Image src={Logo} alt="Logo" className="w-28 object-cover mt-1" />
        </Link>

        {/* DELIVERY */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer transition duration-300 justify-center items-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>

        {/* SIGN IN */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white transition duration-300 cursor-pointer h-[70%]">
          <p>Hello, sign in</p>
          <p className="text-white font-bold flex items-center">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>

        {/* FAVORITE */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white transition duration-300 cursor-pointer h-[70%]">
          <p>Marked</p>
          <p className="tex-white font-bold">& Favorites</p>
        </div>

        {/* CART */}
        <Link
          href="/cart"
          className="flex items-center px-2 border border-transparent hover:border-white transition duration-300 cursor-pointer h-[70%] relative"
        >
          <Image
            src={CartIcon}
            alt="Cart"
            className="w-auto object-cover h-8"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute top-2 left-[29px] text-amazon_yellow text-sm font-semibold">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
