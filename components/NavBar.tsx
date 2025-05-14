import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

interface NavBarProps {
  activePage: string;
}

export default function NavBar({ activePage }: NavBarProps) {
  return (
    <Navbar maxWidth="2xl" className="bg-gray-800 navbar shadow-lg">
      <NavbarBrand>
        <p className="font-bold text-inherit transition-transform duration-300 hover:scale-110">
          <Link href="/" className="text-lg text-white">
            Stagno
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4 sm:gap-6 md:gap-10 navbar-content" justify="center">
        <NavbarItem isActive={activePage === "/"}>
          <Link
            color={activePage === "/" ? "secondary" : "foreground"}
            href="/"
            aria-current="page"
            className="text-sm sm:text-base md:text-lg text-white hover:text-[#1ABC9C] transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#1ABC9C] after:left-0 after:bottom-[-4px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePage === "/encode"}>
          <Link
            color={activePage === "/encode" ? "secondary" : "foreground"}
            href="/encode"
            aria-current="page"
            className="text-sm sm:text-base md:text-lg text-white hover:text-[#1ABC9C] transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#1ABC9C] after:left-0 after:bottom-[-4px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Encode
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePage === "/decode"}>
          <Link
            color={activePage === "/decode" ? "secondary" : "foreground"}
            href="/decode"
            aria-current="page"
            className="text-sm sm:text-base md:text-lg text-white hover:text-[#1ABC9C] transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#1ABC9C] after:left-0 after:bottom-[-4px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Decode
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}