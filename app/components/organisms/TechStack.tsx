import Image from "next/image";
import ScrollSection from "../atoms/ScrollSection";
import SectionTitle from "../atoms/SectionTitle";
import TechCloud from "../atoms/TechCloud";
import { technologies } from "../data/data";

const TechStack = () => {
  return (
    <section id="tech_stack" className="bg-gradient">
      <ScrollSection>
        <div className="flex 2xl:flex-row flex-col gap-2 items-center py-20 overflow-hidden">
          <div>
            <SectionTitle>
              <div className="flex items-center flex-row sm:gap-4 gap-1">
                <Image
                  src="/tech-computer.gif"
                  alt="Tech stack"
                  width={60}
                  height={60}
                />
                Tech stack
              </div>
            </SectionTitle>
            <p className="text-lg">
              My expertise spans a range of modern web development technologies,
              including <b>React and Next.js</b>, as well as styling libraries
              such as
              <b> Tailwind CSS and Chakra UI</b>. I am proficient in
              <b> TypeScript </b>
              and have experience working with various other tools and libraries
              essential for building robust and scalable web applications.
            </p>
          </div>
          <TechCloud />
          <div className="block sm:hidden mt-6">
            <div className="carousel-track overflow-clip">
              {technologies.map((tech) => (
                <div className="bg-zinc-900 h-fit rounded-lg px-4 text-lg py-2">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>
    </section>
  );
};

export default TechStack;
