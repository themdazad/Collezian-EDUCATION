import { User, Link } from "@heroui/react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export const About = () => {
  return (
    <>
      <header className=" px-[5%] min-h-[90vh] grid place-content-center">
        <div className="  space-y-4">
          <div className="user">
            <User
              name="Frontend Developer"
              description={
                <Link
                  href="http://instagram.com/the_mdazad"
                  size="sm"
                  isExternal
                >
                  @the_mdazad
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/81636077?v=4",
              }}
            />
          </div>
          <div className="icons flex items-center space-x-4 text-xl">
            <p>Follow us on</p>
            <span>|</span>
            <a href="http://" target="_blank">
              <FaInstagram />
            </a>
            <a href="http://" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="http://" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
