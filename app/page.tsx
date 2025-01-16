import Tech from "@/components/Technologies";
import Career from "@/components/Career";
import Icon from "@/components/PlusIcon";
import Box from "@/components/Box";
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

      {/*  Technologies */}
      <div className="relative">
        <div className="corners">
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        </div>
        <Box>
          <div className="p-4 pb-6 lg:px-8 lg:py-8">
            <p className="text-[1.5rem] md:text-[2rem] ">Technologies</p>
            <p className="text-[1rem]/relaxed md:text-[1.25rem] text-muted-foreground mt-2 mb-4">
              Discover the programming languages, frameworks & libraries, and
              tools I use across various fields such as web development &
              machine learning.
            </p>
            <Tech />
          </div>
        </Box>
      </div>
      {/*  Experience & Qualifications */}
      <Box className="border-t">
        <div className="p-4 pb-6 lg:px-8 lg:py-8">
          <p className="text-[1.5rem] md:text-[2rem]">
            Experience & Qualifications
          </p>
          <p className="text-[1rem]/relaxed md:text-[1.25rem] text-muted-foreground mt-2 mb-4">
            Discover the programming languages, frameworks & libraries, and
            tools I use across various fields such as web development & machine
            learning.
          </p>
          <Career />
        </div>
      </Box>
    </main>
  );
}
