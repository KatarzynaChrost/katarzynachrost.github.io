import Link from "next/link";
import { navItems } from "@/app/data/data";

const Footer = () => {
  return (
    <footer className="pt-64 pb-28">
      <div className="mainContainer">
        <div className="flex sm:justify-between sm:flex-row flex-col">
          <div className="py-8 flex sm:flex-row flex-col gap-8">
            {navItems.map((item) => (
              <Link key={item.id} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <a className="sm:pl-8 w-fit sm:py-8" download href={"/CV.pdf"}>
            Download CV
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-700 mt-8 sm:mt-0">
        <div className="mainContainer flex justify-between flex-wrap gap-8 mt-8">
          <p className="text-zinc-600">
            Icons by:{" "}
            <a
              target="_blank"
              href="https://lordicon.com/"
              className="hover:text-zinc-300 transition-colors"
            >
              Lordicon
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              href="https://icons8.com"
              className="hover:text-zinc-300 transition-colors"
            >
              Icons8
            </a>
          </p>
          <p className="text-zinc-600">
            ©2024 Project and Deployment Katarzyna Chróst
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
