import React from "react";
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
  onClick: (e: any) => void;
}

const Project: React.FC<ProjectProps> = ({ project, openProject, onClick }) => {
  const image = require(`../assets/projects/${project.image}`);
  const projectId = project.name.toLowerCase().replace(" ", "-");

  return (
    <article
      id={projectId}
      onClick={onClick}
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
          {project.name} <span>{projectId === openProject ? "-" : "+"}</span>
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
};

export default Project;
