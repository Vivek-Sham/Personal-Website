import Link from "next/link";
import { ResumeLink } from "@/data/socials";
import Tech from "@/components/Technologies";
import Career from "@/components/Career";
import Icon from "@/components/PlusIcon";
import Box from "@/components/Box";
import Model from "@/components/ModelViewer";
import { DiagonalArrow } from "@/assets/icons/Arrow";
import { ExternalLink } from "@/assets/icons/ELink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivek Sham | Home",
  description: "Home Page",
};

export default function Home() {
  return (
    <main className="border-x mx-[1.5rem] sm:mx-[2rem] lg:mx-[4rem] relative z-10">
      <div className="corners">
        <Icon className="absolute h-6 w-6 -top-3 -left-3" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3" />
      </div>
      {/* Intro */}
      <Box>
        <div className="py-8">
          <p className="text-[1rem] md:text-[1.25rem] text-muted-foreground">
            👋 Welcome to my space! I&apos;m
          </p>
          <p className="text-[4rem]/none pt-4 md:pt-0 md:text-[6rem]/tight xl:text-[8rem]/tight font-bold tracking-[-.3rem] font-[family-name:var(--font-sora)]">
            Vivek Sham
          </p>
          <div className="pt-8 flex flex-col gap-6">
            <div className="flex flex-col xl:flex-row gap-2 items-start  text-[1rem] md:text-[1.25rem] lg:text-[1.4rem] text-muted-foreground">
              <p>🚀 Aspiring Software Developer</p>
              <p className="hidden xl:block"> | </p>
              <p>💻 Tech Enthusiast</p>
            </div>

            <p className="text-[1rem] md:text-[1.4rem] text-muted-foreground">
              Welcome to my portfolio!
            </p>
            <p className="text-[1rem] md:text-[1.4rem] text-muted-foreground">
              Dive in to explore my work and passion for technology.
            </p>
          </div>
        </div>
      </Box>
      {/*  Technologies */}
      <div className="relative">
        <div className="corners">
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        </div>
        <Box className="border-t">
          <p className="text-[1.5rem] md:text-[2rem] ">Technologies</p>
          <p className="text-[1rem]/relaxed md:text-[1.25rem] text-muted-foreground mt-2 mb-4">
            A showcase of the tools, frameworks, and languages I use in web
            development and machine learning.
          </p>
          <Tech />
        </Box>
      </div>
      {/*  Experience & Qualifications */}
      <Box className="border-t">
        <p className="text-[1.5rem] md:text-[2rem]">
          Experience & Qualifications
        </p>
        <p className="text-[1rem]/relaxed md:text-[1.25rem] text-muted-foreground mt-2 mb-4">
          An overview of my professional journey and educational background.
        </p>
        <Career />
      </Box>
      {/* Model */}
      <Box className="border-t" background="bg-transparent">
        <Model></Model>
        <ul className="mt-8 mb-2 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-[1rem]/relaxed md:text-[1.25rem]">
          <li>
            <Link
              href="/about"
              className="flex items-center justify-center gap-2  border bg-background  rounded-md py-2 px-4 text-muted-foreground hover:text-primary w-[12rem] hover:underline"
            >
              About
              <DiagonalArrow className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2  border bg-background rounded-md py-2 px-4 text-muted-foreground hover:text-primary w-[12rem] hover:underline"
            >
              Projects
              <DiagonalArrow className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </li>
          <li>
            <a
              className="flex items-center justify-center gap-2  border bg-background rounded-md py-2 px-4 text-muted-foreground hover:text-primary w-[12rem]  hover:underline relative"
              href={ResumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </li>
        </ul>
      </Box>
    </main>
  );
}
