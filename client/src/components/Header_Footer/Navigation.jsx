import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Image,
} from "@heroui/react";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  PiNotebookDuotone,
  PiLaptopDuotone,
} from "react-icons/pi";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <NavLink as={NavLink} to="/">
            <Image
              src="/images/Collezian_Logo.svg"
              alt="collezian logo"
              height={100}
              width={100}
              className=" w-12  hover:-rotate-[360deg] transition-transform duration-[2000]"
            />
          </NavLink>
            <NavLink as={NavLink} to="/" className="font-semibold text-lg">
              Collezian-Education
            </NavLink>
        </NavbarBrand>

        <NavbarMenuToggle
          className="sm:hidden"
          onPress={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </NavbarContent>

      {/*Navigation menu for Desktop*/}
      <NavbarContent className="hidden gap-0 sm:flex" justify="center">
        <NavbarItem>
          <Button
            as={NavLink}
            to="/"
            variant="light"
            onPress={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Home
          </Button>
        </NavbarItem>
        
        <NavbarItem>
          <Button
            as={NavLink}
            to="/ResultCheck"
            variant="light"
            onPress={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
           Check Result
          </Button>
        </NavbarItem>
       
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<FiChevronDown />}>
                Engineering
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem
                as={NavLink}
                to="/Engineering"
                key="Engineering"
                startContent={<PiNotebookDuotone />}
                onPress={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Bihar Engineering
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<FiChevronDown />}>
                Other
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem as={NavLink} to='recursive_coder' startContent={<PiLaptopDuotone />}>
                Recursive Coder
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
        <Button
            as={NavLink}
            to="/login"
            variant="flat"
            onPress={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* ****************************** Navigation menu for Mobile *****************************/}
      <NavbarMenu
        className={` space-y-2 px-20 bg-transparent md:hidden sm:flex justify-center items-start `}
      >
        <NavbarItem>
          <Button
            className="text-3xl font-bold"
            as={NavLink}
            to="/"
            variant="light"
            onPress={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Home
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NavLink}
            to="/ResultCheck"
            variant="light"
            onPress={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Check Result
          </Button>
        </NavbarItem>
        
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="text-3xl font-bold"
                variant="light"
                endContent={<FiChevronDown />}
              >
                Engineering
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className="text-2xl"
              variant="faded"
              aria-label="Static Actions"
            >
              <DropdownItem
                as={NavLink}
                to="/Engineering"
                key="Engineering"
                startContent={<PiNotebookDuotone />}
                onPress={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Study Engineering
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

       
      </NavbarMenu>
    </Navbar>
  );
}
