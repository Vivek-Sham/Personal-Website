import Image from "next/image";
import { ExternalLink } from "@/assets/icons/ELink";
import { Github } from "@/assets/icons/Github";
import Icon from "@/components/PlusIcon";
import projects from "@/data/projects";
import Box from "@/components/Box";

export default function Projects() {
  return (
    <main className="border-x mx-[1.5rem] sm:mx-[2rem] lg:mx-[4rem] relative z-10">
      <div className="corners">
        <Icon className="absolute h-6 w-6 -top-3 -left-3" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 " />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3" />
      </div>
      <div className="relative">
        <div className="corners">
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        </div>
        <Box className="border-b">
          <div className="p-4 pb-6 lg:px-8 lg:py-8">
            <p className="text-[1.5rem] md:text-[2rem] ">Projects</p>
            <p className="text-[1rem]/relaxed md:text-[1.25rem] text-muted-foreground mt-2 mb-4">
              Discover the programming languages, frameworks & libraries, and
              tools I use across various fields such as web development &
              machine learning.
            </p>
          </div>
        </Box>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] auto-rows-fr  gap-4  p-4 sm:p-6 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-md border bg-card text-card-foreground flex flex-col h-full overflow-hidden"
          >
            <Image
              src={project.image || "/project/Default.webp"}
              alt={project.name}
              width={5000}
              height={5000}
              className="object-cover w-full h-[12.5rem]"
            />
            <div className="flex-grow p-4">
              <div className="font-semibold tracking-tight text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                {project.name}
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                {project.year && (
                  <span className="bg-accent/75 text-sm opacity-80 px-2 py-1 rounded-md">
                    {project.year}
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/75 text-sm opacity-80 px-2 py-1 rounded-sm font-[family-name:var(--font-sora)] "
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="opacity-80 mb-4 text-sm font-[family-name:var(--font-sora)] border-t mt-4 pt-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-2">
                {project.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className=" flex border bg-accent/25 rounded-sm justify-center items-center p-1 px-2 font-[family-name:var(--font-sora)]"
                  >
                    {tech.name === "Vercel" ? (
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className=" flex items-center justify-center w-[2rem] h-[2rem] text-[2rem] font-bold">
                          &#9650;
                        </span>
                        <span className="opacity-75">{tech.name}</span>
                      </div>
                    ) : (
                      tech.icon && (
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <tech.icon className="h-[1rem] w-[1rem]" />
                          <span className="opacity-65">{tech.name}</span>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mr-2 gap-4">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:opacity-95 text-muted-foreground hover:underline flex items-center justify-center gap-2 mt-8"
                  >
                    <span>View project</span>
                    <ExternalLink className="h-[1.2rem] w-[1.2rem] opacity-75 "></ExternalLink>
                  </a>
                ) : (
                  <div></div>
                )}
                {project.github_url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-8"
                  >
                    <span className="sr-only">Github</span>
                    <Github className="h-[1.5rem] w-[1.5rem] opacity-90 transition-all hover:text-muted-foreground"></Github>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
