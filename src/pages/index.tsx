import Button from "@/components/Button";
import Header from "@/components/Header";
import Skill from "@/components/Skill";
import BaseText from "@/components/typography/BaseText";
import H2 from "@/components/typography/H2";
import { projects, skills } from "@/content/variables";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openProject, setOpenProject] = useState("reisfeeld");

  const handleProjectClick = (e: any) => {
    let target = e.target;
    const tagName = target.tagName.toLowerCase();

    if (tagName !== "article") {
      target = target.closest("article");
    }

    if (openProject === target.id) {
      setOpenProject("");
    } else {
      setOpenProject(target.id);
    }
  };

  return (
    <>
      <Header />

      <main className="[&>*]:mt-11 max-w-[528px] mx-auto xl:max-w-none xl:w-[85%]">
        {/* About section */}
        <section
          className="xl:flex xl:justify-between xl:items-center xl:max-w-[1200px] xl:mx-auto xl:!mt-14"
          id="about"
        >
          <div className="xl:w-[48.5%] xl:max-w-[500px]">
            {/* Info card */}
            <article className="w-full max-w-[400px] mx-auto bg-backgroundSec py-8 sm:max-w-none sm:py-9 sm:rounded">
              <div className="flex items-center justify-between w-[85%] mx-auto">
                <div className="h-[110px] w-[94px] bg-secondary rounded-[40px] sm:h-[172px] sm:w-[147px] sm:rounded-[50px]"></div>
                <div className="sm:text-lg">
                  <h1 className="mb-0.5">
                    I'm{" "}
                    <span className="text-secondary text-xl sm:text-[28px]">
                      Danny Frelink
                    </span>
                    ,
                  </h1>
                  <p>Front-end Developer</p>
                  <button>
                    <Button>Portfolio</Button>
                  </button>
                </div>
              </div>
            </article>

            {/* About text */}
            <article className="w-[85%] mt-6 mx-auto [&>p]:mt-3 [&>p:first-of-type]:mt-4 sm:w-full sm:mt-8 sm:[&>p:first-of-type]:mt-5 sm:[&>p]:mt-3.5 xl:mt-10">
              <H2>About</H2>
              <BaseText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostru exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </BaseText>
              <BaseText>
                Duis aute irure dolor in reprehend in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </BaseText>
            </article>
          </div>

          {/* Skills */}
          <article className="xl:w-[46.5%] xl:max-w-[600px]">
            <h3 className="text-xl text-center mt-7 mb-[18px] sm:text-[28px] sm:mb-[22px] xl:mt-0">
              Skills
            </h3>

            <div className="flex flex-wrap justify-between gap-y-5 w-[85%] max-w-[350px] m-auto sm:gap-y-7 sm:w-full sm:max-w-none [&>*:last-child]:sm:mx-auto">
              {skills.map((skill) => (
                <Skill key={skill.name} skill={skill} />
              ))}
            </div>
          </article>
        </section>

        {/* Portfolio section */}
        <section className="w-[85%] mx-auto sm:w-full" id="portfolio">
          <H2>Portfolio</H2>

          <section className="mt-5 [&>*]:border-t-[0.5px] [&>*:last-child]:border-b-[0.5px] [&>*]:border-textColor sm:[&>*]:border-t-[0.75px] sm:[&>*:last-child]:border-b-[0.75px]">
            {projects.map((project) => {
              const image = require(`../assets/projects/${project.image}`);
              const projectId = project.name.toLowerCase().replace(" ", "-");

              return (
                <article
                  id={projectId}
                  onClick={handleProjectClick}
                  className="py-3 sm:py-[18px] sm:[&_p]:w-[80%]"
                >
                  <div
                    className={`px-2.5 ${
                      projectId === openProject && "mb-5 sm:mb-7"
                    } sm:px-6`}
                  >
                    <h4
                      className={`text-lg flex justify-between ${
                        projectId === openProject && "mb-3"
                      } sm:text-xl`}
                    >
                      {project.name}{" "}
                      <span>{projectId === openProject ? "-" : "+"}</span>
                    </h4>

                    {projectId === openProject && (
                      <>
                        <BaseText>{project.description}</BaseText>

                        <a href={project.href} target="_blank">
                          <Button>Read More</Button>
                        </a>
                      </>
                    )}
                  </div>

                  {projectId === openProject && (
                    <Image
                      className="mb-1.5 sm:w-full sm:px-6"
                      src={image}
                      alt={`Project ${project.name}`}
                      width={500}
                      height={500}
                    />
                  )}
                </article>
              );
            })}
          </section>
        </section>
      </main>

      <footer id="contact"></footer>
    </>
  );
}
