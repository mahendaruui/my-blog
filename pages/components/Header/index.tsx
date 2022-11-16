/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import React from "react";
import tw from "tailwind-styled-components";
import Signature from "../Logo/signature";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Head>
        <Nav>
          <div className="flex justify-between mx-auto items-center">
            <Link href="/">
              <p className="cursor-pointer flex text-cwhite font-extrabold text-2xl font-dancy">
                <Signature />
                <span>Mahendar Dwi Payana</span>
              </p>
            </Link>
            <ul className="text-cwhite font-slap hidden sm:flex flex-1 justify-end items-center gap-2 md:gap-12 text-port-blue uppercase">
              <Link href="/contact">
                <li className="cursor-pointer hover:bg-cnordic px-2 py-2 rounded-sm">
                  Contact
                </li>
              </Link>
              <Link href="/myapp">
                <li className="cursor-pointer hover:bg-cnordic px-2 py-2 rounded-sm">
                  Applications
                </li>
              </Link>
              <Link href="/achive">
                <li className="cursor-pointer hover:bg-cnordic px-2 py-2 rounded-sm">
                  Achievements
                </li>
              </Link>
            </ul>

            <div className="flex sm:hidden flex-1 justify-end h-5 text-cwhite cursor-pointer">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>

          <div className="sm:border-0 px-2 font-slap">
            {/* <div className="{isMenuOpen? : 'sm:hidden':'hidden'}sm:hidden text-left mt-10 md:mt-0"> */}
            <div className={isOpen ? "sm:hidden" : "hidden"}>
              <Link href="/contact">
                <p className="mt-3 sm:mx-3 text-cwhite cursor-pointer hover:bg-cnordic px-5 py-2 rounded-sm">
                  Contact
                </p>
              </Link>
              <Link href="/myapp">
                <p className="mt-3 sm:mx-3 text-cwhite  cursor-pointer hover:bg-cnordic px-5 py-2 rounded-sm">
                  Applications
                </p>
              </Link>
              <Link href="/achive">
                <p className="mt-3 sm:mx-3 text-cwhite  cursor-pointer border-b-1 hover:bg-cnordic px-5 py-2 rounded-sm">
                  Achievements
                </p>
              </Link>
            </div>
          </div>
        </Nav>
      </Head>
    </>
  );
}

const Head = tw.div`bg-cdark shadow-lg`;
const Nav = tw.nav`container py-5 sm:px-10 px-5 mx-auto`;
