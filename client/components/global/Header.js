import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="py-6">
      <Container className={""}>
        <div className="flex justify-between items-center">
          <Link href={"/"} className="font-bold text-xl">
            <Image
              src={"/samba.svg"}
              width={160}
              height={100}
              className="object-contain"
              alt="site logo"
            />
          </Link>

          <Link
            href={"/create"}
            className="bg-primary text-white font-bold px-5 py-2.5 rounded-md text-sm uppercase"
          >
            Generate Image
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
