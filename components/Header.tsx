import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

function Header() {
  return (
    <header className="flex sticky lg:flex-row place-items-baseline place-content-evenly py-2 px-6 lg:px-16 border-b border-yellow-500">
      <div>
        <Image
          src="/js.png"
          alt="JS Logo"
          width={25}
          height={25}
          className="rounded-s-sm"
        />
      </div>
      <div className="sm:hidden">
        <GiHamburgerMenu />
      </div>
      <nav className="hidden sm:block">
        <ul className="flex items-center space-x-4">
          <li className="hover:bg-gray-500">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:bg-gray-500">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:bg-gray-500">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:bg-gray-500">
            <Link href="#skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
