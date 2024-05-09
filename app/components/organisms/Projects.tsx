import Image from "next/image";
import ScrollSection from "../atoms/ScrollSection";
import Link from "next/link";
import Button from "../atoms/Button";
import SectionTitle from "../atoms/SectionTitle";
import clsx from "clsx";
import { projectsData } from "@/app/data/data";

const Projects = () => {
  const isEven = (id: number) => {
    return id % 2 === 0;
  };

  return (
    <section id="projects">
      <ScrollSection>
        <SectionTitle>Projects</SectionTitle>
        {projectsData.map((project) => (
          <div className="py-20">
            <ScrollSection withoutContainer>
              <div
                className={clsx(
                  "flex gap-8 flex-col",
                  { "2xl:flex-row-reverse 2xl:text-right": isEven(project.id) },
                  "2xl:flex-row items-center w-full"
                )}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  className="relative after:content-['•••'] after:absolute after:top-[-13px] after:right-[-18px] after:w-20 after:h-6 after:text-zinc-50 after:font-black after:text-5xl after:text-left"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="xl:border-[10px] xl:border-t-[24px] border-t-[22px] border-zinc-700 rounded-2xl"
                  />
                </Link>
                <div className="text-lg flex flex-col gap-4 2xl:max-w-[50%]">
                  <h3 className="font-semibold text-3xl pb-4">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400">{project.description}</p>
                  <div>
                    <p>
                      <b>Role:</b> {project.role}
                    </p>
                    <p>
                      <b>Duration:</b> {project.duration}
                    </p>
                  </div>
                  <div
                    className={clsx("flex flex-wrap gap-2 mb-2", {
                      "2xl:justify-end": isEven(project.id),
                    })}
                  >
                    {project.technologies.map((tech) => (
                      <span className="bg-zinc-700 rounded-lg px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} target="_blank">
                    <Button outline>View project</Button>
                  </Link>
                </div>
              </div>
            </ScrollSection>
          </div>
        ))}
      </ScrollSection>
    </section>
  );
};

export default Projects;
