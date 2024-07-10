import Image from "next/image";
import React from "react";
import BaseText from "./typography/BaseText";

interface ContactProps {
  contact: {
    content: string;
    href?: string;
    icon: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const icon = require(`../assets/contact-icons/${contact.icon}`);

  return (
    <article className="flex items-center gap-3 sm:gap-5">
      <Image
        className="h-4 w-auto sm:h-5"
        src={icon}
        alt={`Info ${contact.icon.split(".")[0]}`}
        width={100}
        height={100}
      />

      {contact.href ? (
        <a
          className="block border-b-[0.5px] border-textColor sm:text-lg sm:border-b-[0.75px] hover:text-secondary hover:border-secondary focus:text-secondary focus:border-secondary"
          href={contact.href}
          target="_blank"
        >
          {contact.content}
        </a>
      ) : (
        <BaseText>{contact.content}</BaseText>
      )}
    </article>
  );
};

export default Contact;
