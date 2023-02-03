import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="py-5 border-t">
      <Container className={"text-center text-gray-500 text-sm"}>
        {/* <span>&copy; Samba.ai {new Date().getFullYear()}</span> */}

        <p>
          {new Date().getFullYear()} developed by{" "}
          <a
            href="https://sambadev.gm"
            target={"_blank"}
            className="hover:underline hover:text-primary"
            rel="noreferrer"
          >
            sambadev
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
