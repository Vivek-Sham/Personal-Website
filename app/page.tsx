import { Intro } from "@/data/intro";
import Tech from "@/components/Technologies";
import Career from "@/components/Career";
import { Language } from "@/assets/icons/Lang";
import { Location } from "@/assets/icons/Location";

export default function Home() {
  return (
    <div className=" py-4 flex justify-between flex-col mx-[1rem] sm:mx-[1.5rem] lg:mx-[7rem] items-center">
      {/* Intro */}
      <div className="bg-background p-4 mb-6 border-[2px] border-border rounded-lg flex flex-col gap-4">
        <p className="text-[1.5rem] font-semibold">About</p>
        <p>{Intro.description}</p>

        <div className="border-t">
          <div className="pt-4 flex  flex-col md:flex-row  md:gap-[5rem] gap-1">
            {/* Languages */}
            <div className="mb-4 flex flex-col">
              <div className="mb-1 flex flex-row gap-1 items-center">
                <Language className="h-[1.25rem] w-[1.25rem]"></Language>
                <p className="text-[1rem]">Languages</p>
              </div>
              <div className="flex flex-col">
                {Intro.languages.map((language, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-muted-foreground">
                      {language.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Location */}
            <div className="mb-4 flex flex-col">
              <div className="mb-1 flex flex-row gap-1 items-center">
                <Location className="h-[1.25rem] w-[1.25rem]"></Location>
                <p className="text-[1rem]">Location</p>
              </div>
              <div className="flex items-center">
                <span className="text-muted-foreground">
                  {Intro.location.name}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-4 flex flex-col">
              <p className="text-[1rem]">Links</p>
              <div className="mb-1 flex flex-col gap-1 items-start">
                {Intro.socials.map((social, index) => (
                  <a
                    className="flex items-center justify-center gap-1"
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
                    <span className="text-muted-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
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
