import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header className="bg-cdark">
        <nav className="container py-5 sm:px-10 px-5 mx-auto">
          <div className="flex justify-between mx-auto items-center">
            <Link href="/">
              <p className="cursor-pointer text-cwhite font-extrabold text-2xl font-dancy">Mahendar Dwi Payana</p>
            </Link>
            <ul className="text-cwhite hidden md:flex flex-1 justify-end items-center gap-12 text-port-blue  font-semibold font-slap">
              <Link href="/about">
                <li className="cursor-pointer">About</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
              <Link href="/product">
                <li className="cursor-pointer">Product</li>
              </Link>
            </ul>

            <div className="flex sm:hidden flex-1 justify-end h-5 text-cwhite cursor-pointer">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>

          <div className="md:border-0 mt-3 py-2 px-2 font-slap">
            {/* <div className="{isMenuOpen? : 'sm:hidden':'hidden'}sm:hidden text-left mt-10 md:mt-0"> */}
            <div className={isOpen ? "sm:hidden" : "hidden"}>
              <Link href="/about">
                <p className="mt-3 md:mx-3 text-cwhite  cursor-pointer ">About</p>
              </Link>
              <Link href="/contact">
                <p className="mt-3 md:mx-3 text-cwhite  cursor-pointer ">Contact</p>
              </Link>
              <Link href="/product">
                <p className="mt-3 md:mx-3 text-cwhite  cursor-pointer border-b-1">Product</p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
