"use client"
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/Card-hover-effect';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSupabase, SiSvelte, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from 'react-icons/bi';
export default function Skills() {
  const skills = [
    {
       title: "React",
       Icon: SiReact,
    },
    {
       title: "NextJs",
       Icon: SiNextdotjs,
    },
    {
      title: "JavaScript",
      Icon: SiJavascript,
    },
    {
      title: "NodeJs",
      Icon: SiNodedotjs,
    },
    {
      title: "Postgresql",
      Icon: SiPostgresql,
    },
    {
      title: "Python",
      Icon: SiPython,
    },
    {
      title: "SuperbBase",
      Icon: SiSupabase,
    },
    {
      title: "Svelte",
      Icon: SiSvelte,
    },
    {
      title: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      title: "Java",
      Icon: FaJava,
    },
    {
      title: "Spring Boot",
      Icon: BiLogoSpringBoot
    },
    {
      title: "Adobe PhotoShop",
      Icon: SiAdobephotoshop
    },
    {
      title: "Adobe Illustrator",
      Icon: SiAdobeillustrator
    },
    {
      title: "Adobe Aftereffect",
      Icon: SiAdobeaftereffects
    },
    {
      title: "Adobe PremierePro",
      Icon: SiAdobepremierepro
    },
    {
      title: "Adobe Indesign",
      Icon: SiAdobeindesign
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title 
        text="Skills✍" 
        className="flex flex-col items-center justify-center transform -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
