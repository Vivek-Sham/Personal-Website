import Image from "next/image";
import { ExternalLink } from "@/assets/icons/ELink";
import { Github } from "@/assets/icons/Github";

import projects from "@/data/projects";

function Project() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mx-[1rem] sm:mx-[1.5rem] lg:mx-[7rem] py-4 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] auto-rows-fr">
      {projects.map((project) => (
        <div
          key={project.id}
          className="rounded-lg border bg-card text-card-foreground flex flex-col h-full overflow-hidden"
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
                <span className="bg-accent/75 text-xs px-2 py-1 rounded-md">
                  {project.year}
                </span>
              )}
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/75 text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className=" flex border bg-accent/25 rounded-md justify-center items-center p-1 px-2"
                >
                  {tech.name === "Vercel" ? (
                    <span className="text-2xl font-bold">&#9650;</span>
                  ) : (
                    tech.icon && (
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <tech.icon className="h-[1rem] w-[1rem]" />
                        <span>{tech.name}</span>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 mr-2 gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-muted-foreground hover:underline flex items-center justify-center gap-2"
                >
                  <span>View project</span>
                  <ExternalLink className="h-[1.2rem] w-[1.2rem] opacity-75"></ExternalLink>
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <span className="sr-only">Github</span>
                  <Github className="h-[1.5rem] w-[1.5rem] opacity-80 transition-all hover:text-muted-foreground"></Github>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
