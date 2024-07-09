import Image from "next/image";
import React from "react";
import BaseText from "./typography/BaseText";

interface SkillProps {
  skill: {
    name: string;
    icon: string;
  };
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
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
      <BaseText>{skill.name}</BaseText>
    </div>
  );
};

export default Skill;
