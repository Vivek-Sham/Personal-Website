import { Intro } from "@/data/intro";
import Tech from "@/components/Technologies";
import Career from "@/components/Career";
import { Language } from "@/assets/icons/Lang";
import { Location } from "@/assets/icons/Location";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Home() {
  return (
    <div className=" pb-4 pt-[5rem] flex justify-between flex-col mx-[1rem] sm:mx-[1.5rem] lg:mx-[7rem] items-center">
      <div className="  w-full min-h-[80vh] pb-4">
        <div className="pb-4 min-h-[40vh]">
          <TypingAnimation
            text={[
              "Hi, It's",
              "Vivek",
              "Aspiring Software Devloper",
              "A self-taught developer with a passion for technology and problem-solving.🚀",
            ]}
            duration={75}
            classNames={[
              "text-[1rem]",
              "text-[5rem] font-bold md:text-[8rem]",
              "text-[1rem] md:text-[1.25rem] pb-2",
              "text-[1rem] md:text-[1.25rem]",
            ]}
          />
        </div>
        {/* Social Links */}
        <div className="mb-1 flex flex-wrap flex-row gap-4 items-start">
          {Intro.socials.map((social, index) => (
            <a
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary border bg-accent/50 rounded-md  py-2 px-4"
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
              <social.icon className="h-[1.5rem] w-[1.5rem] opacity-75"></social.icon>
              <p className="">{social.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="bg-background p-4 mb-6 border-[2px] border-border rounded-lg flex flex-col gap-4">
        <p className="text-[1.5rem] font-semibold">About Me</p>
        <div className="text-sm flex flex-col gap-4">
          {"description" in Intro &&
            Intro.description &&
            Intro.description.map((desc, i) => (
              <p className="" key={i}>
                {desc} <br />
              </p>
            ))}
        </div>
        <div className="border-t">
          <div className="pt-4 flex  flex-col gap-1">
            {/* Languages */}
            <div className="mb-4 flex flex-row items-start md:items-center gap-2">
              <div className="flex flex-row gap-1 items-center">
                <Language className="h-[1.25rem] w-[1.25rem]"></Language>
                <p className="text-[1rem]">Languages:</p>
              </div>
              <div className="flex gap-2 flex-col md:flex-row ">
                {Intro.languages.map((language, index) => (
                  <div key={index} className="">
                    <span className="text-muted-foreground">
                      {language.name}
                      {index < Intro.languages.length - 1 && ","}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Location */}
            <div className="mb-4 flex flex-row items-center gap-2">
              <div className="flex flex-row gap-1">
                <Location className="h-[1.25rem] w-[1.25rem]"></Location>
                <p className="">Location:</p>
              </div>
              <p className="text-muted-foreground text-[1rem]">
                {Intro.location.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  Technologies */}
      <div className=" border-t mb-6 w-full">
        <div className="bg-background p-4 mt-6 border-[2px] border-border rounded-lg flex flex-col gap-4 ">
          <p className="text-[1.5rem]">Technologies</p>
          <div className="flex flex-col justify-center">
            <Tech></Tech>
          </div>
        </div>
      </div>
      {/*  Experience & Qualifications */}
      <div className=" border-t mb-6 w-full">
        <div className="bg-background p-4 mt-6 border-[2px] border-border rounded-lg flex flex-col gap-4 ">
          <p className="text-[1.5rem]">Experience & Qualifications</p>
          <div className="flex flex-col justify-center">
            <Career></Career>
          </div>
        </div>
      </div>
    </div>
  );
}
