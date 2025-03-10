import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import BaseText from "@/components/typography/BaseText";
import H2 from "@/components/typography/H2";
import { contactInfo, projects, skills } from "@/content/variables";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Home() {
  const [openProject, setOpenProject] = useState("Reisfeeld");
  const [oldOpenProject, setOldOpenProject] = useState("");
  const activeProject = projects.find(
    (project) => project.name === openProject
  );
  const activeProjectImage =
    activeProject && require(`../assets/projects/${activeProject.image}`);
  const profileImg = require("../assets/profile.png");

  const handleProjectClick = (e: any) => {
    let target = e.target;
    const tagName = target.tagName.toLowerCase();

    if (tagName !== "article") {
      target = target.closest("article");
    }

    if (openProject !== target.id) {
      setOldOpenProject(openProject);
      setOpenProject(target.id);
    }
  };

  const handleProjectKeyDown = (e: any) => {
    if (e.key === "Enter") {
      let target = e.target;

      if (openProject !== target.id) {
        setOldOpenProject(openProject);
        setOpenProject(target.id);
      }
    }
  };

  return (
    <>
      <Header />

      <main className="max-w-[528px] mx-auto lg:max-w-none lg:w-[85%]">
        {/* About section */}
        <section
          className="mt-28 sm:mt-[7.5rem] lg:flex lg:justify-between lg:items-center lg:max-w-[1200px] lg:mx-auto lg:mt-32"
          id="about"
        >
          <div className="lg:w-[48.5%] lg:max-w-[500px]">
            {/* Info card */}
            <article className="w-full max-w-[400px] mx-auto bg-backgroundSec py-8 sm:max-w-none sm:py-9 sm:rounded">
              <div className="flex items-center justify-between w-[85%] mx-auto">
                <Image
                  className="h-[110px] w-[94px] bg-secondary rounded-[37.5px] object-cover object-center sm:h-[172px] sm:w-[147px] sm:rounded-[50px]"
                  src={profileImg}
                  alt="Me (Danny Frelink)"
                  width={500}
                  height={500}
                />

                <div className="sm:text-lg">
                  <h1 className="mb-0.5">
                    I'm{" "}
                    <span className="text-secondary text-xl sm:text-[28px]">
                      Danny Frelink
                    </span>
                    ,
                  </h1>
                  <p>Front-end Developer</p>

                  <Link
                    className="cursor-pointer block w-fit mt-3 sm:mt-5 hover:bg-[rgba(42,_52,_61,_0.4)] focus:bg-[rgba(42,_52,_61,_0.4)]"
                    to="portfolio"
                    smooth={true}
                    offset={-105}
                    duration={500}
                    tabIndex={0}
                  >
                    <Button>Portfolio</Button>
                  </Link>
                </div>
              </div>
            </article>

            {/* About text */}
            <article className="w-[85%] mt-6 mx-auto [&>p]:mt-3 [&>p:first-of-type]:mt-4 sm:w-full sm:mt-8 sm:[&>p:first-of-type]:mt-5 sm:[&>p]:mt-3.5 lg:mt-10">
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
          <article className="lg:w-[46.5%] lg:max-w-[600px]">
            <h3 className="text-xl text-center mt-7 mb-[18px] sm:text-2xl sm:mb-[22px] lg:mt-0">
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
        <section
          className="w-[85%] mx-auto my-11 sm:w-full sm:my-20 lg:max-w-[1200px]"
          id="portfolio"
        >
          <H2>Portfolio</H2>

          <div className="mt-5 lg:flex lg:mt-9">
            <section className="[&>*]:border-t-[0.5px] [&>*:last-child]:border-b-[0.5px] [&>*]:border-textColor sm:[&>*]:border-t-[0.75px] sm:[&>*:last-child]:border-b-[0.75px] lg:w-5/12 lg:max-w-[550px] xl:w-1/2">
              {projects.map((project) => (
                <Project
                  key={project.name}
                  project={project}
                  openProject={openProject}
                  oldOpenProject={oldOpenProject}
                  onClick={handleProjectClick}
                  onKeyDown={handleProjectKeyDown}
                />
              ))}
            </section>

            <div className="relative flex-grow lg:block -z-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={activeProjectImage}
                alt={`Project ${activeProject && activeProject.name}`}
                width={5000}
                height={5000}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Contact section */}
      <footer
        className="w-full bg-backgroundSec pt-[26px] pb-9 sm:pt-9 sm:pb-11"
        id="contact"
      >
        <section className="w-[85%] mx-auto max-w-[1200px]">
          <H2>Contact</H2>

          <div className="[&>*:first-child]:mt-8 [&>*:not(:first-child)]:mt-6 sm:flex sm:flex-wrap sm:max-w-[750px] sm:[&>*]:w-1/2 sm:[&>*]:!mt-9">
            {contactInfo.map((contact) => (
              <Contact key={contact.icon.split(".")[0]} contact={contact} />
            ))}
          </div>
        </section>
      </footer>
    </>
  );
}
