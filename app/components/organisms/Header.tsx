"use client";

import { TypeAnimation } from "react-type-animation";
import Button from "../atoms/Button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section id="/">
      <div className="mainContainer pt-10 sm:pt-24 md:pt-40 lg:pt-80 2xl:pt-64">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[auto,400px] gap-4 justify-between">
          <div className="my-auto">
            <h1 className="text-5xl lg:mt-8 md:text-6xl font-bold leading-none mb-16 lg:mb-4 mt-[-130px] bg-opacity-40 bg-zinc-900 backdrop-blur-md lg:bg-opacity-0 rounded-2xl px-2 lg:px-0 z-10 relative">
              <span className="gradient-text pb-2">Hello, I'm</span>
              <span className="block min-h-48 xs:min-h-32 lg:min-h-48 xl:min-h-32 max-w-[unset] lg:max-w-[300px] xl:max-w-[unset]">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer!",
                    1800,
                    "Kate!",
                    1800,
                    "bringing Your idea online!",
                    1800,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <div className="flex gap-6 font-semibold flex-col sm:flex-row">
              <Link href={"#contact_me"}>
                <Button className="w-full sm:w-auto">Get in touch</Button>
              </Link>
              <Link href={"#projects"}>
                <Button outline className="w-full sm:w-auto">
                  See my work
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/katarzyna_chrost.webp"
            alt="Katarzyna Chróst Photo"
            width={430}
            height={750}
            priority
            className="mx-auto w-[220px] md:w-[300px] xl:w-[360px] 2xl:w-[400px] 3xl:w-[430px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
