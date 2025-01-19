import ThemeSwitch from "../utils/ThemeSwitch";
import { Divider } from "@heroui/react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <Divider />
      <footer className="flex flex-wrap justify-center max-sm:text-center md:justify-between items-centerm py-4  px-[5%] max-sm:space-y-6">
        <p className="text-[12px]">
          © 2024 Collezian. All Rights Reserved.
          <br />
          Developed with <span>❤</span> By {" "}
          <a
            className="font-semibold text-sky-600"
            target="_blank"
            href="https://www.instagram.com/the_mdazad/"
          >
            Collezian Community
          </a>
        </p>
        <div className="icons flex items-center space-x-4 text-2xl">
          <a href="http://" target="_blank">
            <FaInstagram />
          </a>
          <a href="http://" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="http://" target="_blank">
            <FaTwitter />
          </a>
          <span>|</span>
          <ThemeSwitch />
        </div>
      </footer>
    </>
  );
}
