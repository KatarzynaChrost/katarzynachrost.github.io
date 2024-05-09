import ScrollSection from "../atoms/ScrollSection";
import SectionTitle from "../atoms/SectionTitle";
import Button from "../atoms/Button";
import { Parisienne } from "next/font/google";
import { Outfit } from "next/font/google";
import Link from "next/link";

const handwriting = Parisienne({
  weight: ["400"],
  subsets: ["latin"],
});
const outfit = Outfit({ weight: ["800"], subsets: ["latin"] });

const AboutMe = () => {
  return (
    <section id="about_me" className="my-40 relative pt-28">
      <p
        className={`gradient-text absolute text-shadow-lg ${outfit.className} text-[1200px] leading-none bottom-[-20vw] right-[0] z-[0] block lg:hidden`}
      >
        3
      </p>
      <ScrollSection>
        <div className="xl:py-20 py-16 xl:px-10 px-7 bg-zinc-900 rounded-3xl z-0">
          <div className="lg:ml-[42%] relative z-0">
            <p
              className={`gradient-text absolute text-shadow-md ${outfit.className} text-[1500px] lg:text-[850px] xl:text-[1050px] top-[-820px] lg:top-[-370px] xl:top-[-550px] xl:left-[-600px] lg:left-[-480px] left-[-100px] z-[-10] lg:z-[10] hidden lg:block`}
            >
              3
            </p>
            <SectionTitle>About me</SectionTitle>
            <p className="mb-16 mt-4 text-lg leading-relaxed font-medium text-zinc-200 indent-8 ">
              For the past <b>3 years</b>, I've been immersed in the world of
              programming, with the last
              <b> 2 years dedicated to commercial React</b> development.
              <br /> <br /> Currently, I'm deepening my expertise in{" "}
              <b>Next.js</b>. As a tangible demonstration, I've developed this
              portfolio website utilizing the capabilities of this framework.
              <br /> <br />
              I'm thrilled at the prospect of joining a team where I can
              leverage my skills and embrace fresh challenges.
            </p>
            <div className="flex xl:flex-row flex-col-reverse gap-8 justify-between">
              <span className="grow-0">
                <a download href={"/CV.pdf"}>
                  <Button outline onZinc>
                    Download CV
                  </Button>
                </a>
              </span>
              <p
                className={`${handwriting.className} text-right text-4xl text-zinc-500`}
              >
                Katarzyna Chróst
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>
    </section>
  );
};

export default AboutMe;
