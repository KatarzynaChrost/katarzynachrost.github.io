"use client";

import Link from "next/link";
import Button from "../atoms/Button";
import { useToggle } from "usehooks-ts";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { navItems } from "@/app/data/data";

const Navigation = () => {
  const [isSideMenuVisible, toggleSideMenuVisibility] = useToggle();

  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-zinc-100 transition ease duration-300`;

  return (
    <nav className="bg-zinc-900 relative z-10 2xl:py-2">
      <div className="mainContainer bg-zinc-900 relative">
        <div className="flex justify-between items-center text-lg py-4 gap-5 relative z-10">
          <Link className="pr-4 font-bold text-3xl" href="/">
            <span className="font-black gradient-text">x</span>Kate
          </Link>
          <div className="hidden xl:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link key={item.id} href={item.link}>
                {item.name}
              </Link>
            ))}
            <Link href="#contact_me">
              <Button outline onZinc>
                Contact me
              </Button>
            </Link>
          </div>
          <div className="xl:hidden">
            <button
              className="flex flex-col h-12 w-12 justify-center items-center group"
              onClick={toggleSideMenuVisibility}
            >
              <div
                className={twMerge(
                  clsx(genericHamburgerLine, {
                    "rotate-45 translate-y-3": isSideMenuVisible,
                  })
                )}
              />
              <div
                className={twMerge(
                  clsx(genericHamburgerLine, {
                    "opacity-0": isSideMenuVisible,
                  })
                )}
              />
              <div
                className={twMerge(
                  clsx(genericHamburgerLine, {
                    "-rotate-45 -translate-y-3": isSideMenuVisible,
                  })
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={clsx(
            "xl:hidden absolute top-full bg-zinc-900 px-8 pb-10 -right-5 text-right transition-transform ease duration-300 -z-[1]",
            isSideMenuVisible ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="mb-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="block py-2 text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href="#contact_me">
            <Button outline onZinc>
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
