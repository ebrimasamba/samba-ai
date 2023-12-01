import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { HiCog8Tooth, HiOutlineArrowUpOnSquare } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="py-6 absolute z-50 w-full bg-gradient-to-b from-black to-transparent">
      <Container className={""}>
        <div className="flex justify-between items-center">
          <Link href={"/"} className="font-bold text-xl">
            <Image
              src={"/samba.svg"}
              width={150}
              height={100}
              className="object-contain inline-block sm:hidden"
              alt="site logo"
            />

            <Image
              src={"/samba.svg"}
              width={160}
              height={100}
              className="object-contain hidden sm:inline-block"
              alt="site logo"
            />
          </Link>

          <Link
            href={"/create"}
            className="bg-primary text-white font-bold px-3 sm:px-5 py-2.5 rounded-md inline-flex items-center space-x-2"
          >
            <span>Generate</span> <HiCog8Tooth className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
