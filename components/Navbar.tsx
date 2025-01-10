import Link from "next/link";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import { NavModal } from "@/components/NavModal";

function Navbar() {
  return (
    <nav className="pt-8 pb-4 mx-[1.5rem] sm:mx-[2.5rem] lg:mx-[15rem] flex justify-between items-center text-md">
      <div>
        <p>Vivek Sham</p>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex flex-row gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-2">
        <ThemeSwitch />
        <ThemeSwitch />
        <div className="flex sm:hidden">
          <NavModal />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
