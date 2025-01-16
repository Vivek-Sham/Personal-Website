import Link from "next/link";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import { NavModal } from "@/components/NavModal";

function Navbar() {
  return (
    <nav className="border-b text-md font-[family-name:var(--font-geist-mono)]  ">
      <div className="border-x py-4 px-2 sm:p-4 flex justify-between items-center mx-[1.5rem] sm:mx-[2rem] lg:mx-[4rem]">
        <div>
          <p>Vivek Sham</p>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex flex-row gap-8">
            <li>
              <Link
                href="/"
                className="hover:text-muted-foreground transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-muted-foreground transition-all"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-muted-foreground transition-all"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-2">
          <ThemeSwitch />
          <div className="flex sm:hidden">
            <NavModal />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
