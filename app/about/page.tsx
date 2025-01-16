import { Language } from "@/assets/icons/Lang";
import { Location } from "@/assets/icons/Location";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { ExternalLink } from "@/assets/icons/ELink";
import { Intro } from "@/data/intro";
import Icon from "@/components/PlusIcon";
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

      <Box>
        <div className="p-4 pb-6 lg:px-8 lg:py-8">
          <p className="text-[1.5rem] md:text-[2rem] ">About Me</p>
          <div className="text-[1.05rem] text-muted-foreground mt-2 mb-4  flex flex-col gap-4">
            {"description" in Intro &&
              Intro.description &&
              Intro.description.map((desc, i) => (
                <p className="" key={i}>
                  {desc} <br />
                </p>
              ))}
          </div>
          <div className="border-t text-[1.05rem]">
            <div className="pt-4 flex  flex-col gap-1">
              {/* Languages */}
              <div className="mb-4 flex flex-row items-start md:items-center gap-2 font-[family-name:var(--font-sora)]">
                <div className="flex flex-row gap-1 items-center ">
                  <Language className="h-[1.25rem] w-[1.25rem]"></Language>
                  <p className="">Languages:</p>
                </div>
                <div className="flex gap-2 flex-col md:flex-row ">
                  {Intro.languages.map((language, index) => (
                    <div key={index} className="">
                      <p className="text-muted-foreground">
                        {language.name}
                        {index < Intro.languages.length - 1 && ","}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Location */}
              <div className="mb-4 flex flex-row gap-2 font-[family-name:var(--font-sora)]">
                <div className="flex flex-row gap-1 items-start">
                  <Location className="h-[1.25rem] w-[1.25rem]"></Location>
                  <p className="">Country:</p>
                </div>
                <p className="text-muted-foreground">{Intro.location.name}</p>
              </div>
              {/* Socials */}
              <div className="mb-1 flex  flex-row gap-4 items-start">
                <div className="flex flex-row gap-1 items-center">
                  <LinkIcon className="h-[1.25rem] w-[1.25rem]"></LinkIcon>
                  <p className="">Links:</p>
                </div>
                <div className="flex gap-2 flex-col md:flex-row ">
                  {Intro.socials.map((social, index) => (
                    <a
                      className="flex items-center justify-center gap-1 text-muted-foreground hover:text-primary"
                      key={index}
                      href={
                        social.name === "Email"
                          ? `mailto:${social.url[0]}@${social.url[1]}.${social.url[2]}`
                          : Array.isArray(social.url)
                          ? social.url.join("")
                          : social.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="underline">{social.name}</p>
                      <ExternalLink className="h-[1rem] w-[1rem]"></ExternalLink>
                      {index < Intro.socials.length - 1 && ","}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </main>
  );
}
