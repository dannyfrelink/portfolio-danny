import Header from "@/components/Header";
import BaseText from "@/components/typography/BaseText";
import H2 from "@/components/typography/H2";
import Image from "next/image";

export default function Home() {
  const skills = [
    {
      name: "HTML",
      icon: "html.png",
    },
    {
      name: "CSS",
      icon: "css.png",
    },
    {
      name: "Javascript",
      icon: "javascript.png",
    },
    {
      name: "NextJS",
      icon: "next-js.png",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind-css.png",
    },
    {
      name: "ReactJS",
      icon: "react-js.png",
    },
    {
      name: "NodeJS",
      icon: "node-js.png",
    },
    {
      name: "Git",
      icon: "git.png",
    },
    {
      name: "Figma",
      icon: "figma.png",
    },
    {
      name: "Typescript",
      icon: "typescript.png",
    },
  ];

  return (
    <>
      <Header />

      <main className="[&>*]:mt-11 max-w-[528px] mx-auto xl:max-w-none xl:w-[85%]">
        <section
          className="xl:flex xl:justify-between xl:items-center xl:max-w-[1200px] xl:mx-auto xl:!mt-14"
          id="about"
        >
          <div className="xl:w-[48.5%] xl:max-w-[500px]">
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
                  <button className="border-2 border-secondary rounded text-secondary mt-3 py-1.5 px-3 sm:mt-5">
                    Portfolio
                  </button>
                </div>
              </div>
            </article>
            <article className="w-[85%] mt-6 mx-auto [&>p]:mt-3 [&>p:first-of-type]:mt-4 sm:w-full sm:mt-8 sm:[&>p:first-of-type]:mt-5 sm:[&>p]:mt-3.5">
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
          <article className="xl:w-[46.5%] xl:max-w-[600px]">
            <h3 className="text-xl text-center mt-7 mb-[18px] sm:text-[28px] sm:mb-[22px] xl:mt-0">
              Skills
            </h3>

            <div className="flex flex-wrap justify-between gap-y-5 w-[85%] max-w-[350px] m-auto sm:gap-y-7 sm:w-full sm:max-w-none [&>*:last-child]:sm:mx-auto">
              {skills.map((skill) => {
                let icon = require(`../assets/skills-icons/${skill.icon}`);
                return (
                  <div className="flex flex-col items-center bg-backgroundSec rounded-[30px] w-[45%] max-w-[158px] py-5 sm:w-[30%] sm:rounded-[40px] sm:max-w-none sm:py-7">
                    <Image
                      src={icon}
                      alt={skill.name}
                      width={100}
                      height={100}
                      className="h-10 w-auto mb-2 sm:h-11"
                    />
                    <p className="sm:text-lg">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <section id="portfolio"></section>
      </main>

      <footer id="contact"></footer>
    </>
  );
}
