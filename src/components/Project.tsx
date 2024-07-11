import React, { useEffect, useRef, useState } from "react";
import BaseText from "./typography/BaseText";
import Button from "./Button";
import Image from "next/image";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    href: string;
    image: string;
  };
  openProject: string;
  oldOpenProject: string;
  onClick: (e: any) => void;
  onKeyDown: (e: any) => void;
}

const Project: React.FC<ProjectProps> = ({
  project,
  openProject,
  oldOpenProject,
  onClick,
  onKeyDown,
}) => {
  const image = require(`../assets/projects/${project.image}`);
  const projectId = project.name;
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [openProject]);

  const ifStatement = projectId === openProject || projectId === oldOpenProject;

  return (
    <article
      ref={contentRef}
      id={projectId}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`project py-3 sm:py-[18px] sm:[&_p]:w-[80%] ${
        projectId !== openProject
          ? "cursor-pointer hover:bg-[rgba(61,_71,_81,_0.4)] focus:bg-[rgba(61,_71,_81,_0.4)]"
          : "project-open"
      } ${projectId === oldOpenProject && "project-closed"}`}
      tabIndex={projectId !== openProject ? 0 : undefined}
      style={
        {
          "--content-height": ifStatement && contentHeight,
        } as React.CSSProperties
      }
    >
      <div
        className={`px-2.5 ${ifStatement && "mb-5 sm:mb-7 xl:mb-0"} sm:px-6`}
      >
        <h4
          className={`text-lg flex justify-between ${
            ifStatement && "mb-3"
          } sm:text-xl`}
        >
          {project.name}{" "}
          <span className={projectId === openProject ? "hidden" : ""}>+</span>
        </h4>

        {ifStatement && (
          <>
            <BaseText>{project.description}</BaseText>

            <a
              className="block w-fit mt-3 sm:mt-5 hover:bg-[rgba(61,_71,_81,_0.4)] focus:bg-[rgba(61,_71,_81,_0.4)]"
              href={project.href}
              target="_blank"
            >
              <Button>
                {project.href.includes("github") ? "See Code" : "See Website"}
              </Button>
            </a>
          </>
        )}
      </div>

      {ifStatement && (
        <Image
          className="mb-1.5 sm:w-full sm:px-6 xl:hidden"
          src={image}
          alt={`Project ${project.name}`}
          width={500}
          height={500}
        />
      )}
    </article>
  );
};

export default Project;
