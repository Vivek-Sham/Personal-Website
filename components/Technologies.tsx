import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { technologies } from "@/data/technologies";

export default function Tab() {
  return (
    <Tabs defaultValue="tab-1" className=" font-[family-name:var(--font-sora)]">
      <ScrollArea className="w-full">
        <TabsList className="h-auto rounded-none border-b border-border bg-transparent p-0 w-full">
          {technologies.map((category, index) => (
            <TabsTrigger
              key={index}
              value={`tab-${index + 1}`}
              className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            >
              {category.icon ? (
                <category.icon
                  className="h-[1.2rem] w-[1.2rem] transition-all duration-300 mb-1.5"
                  aria-hidden="true"
                />
              ) : null}
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar className="h-0" orientation="horizontal" />
      </ScrollArea>
      {technologies.map((techCategory, index) => (
        <TabsContent key={index} value={`tab-${index + 1}`}>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {techCategory.items.map((tech) => (
              <TooltipProvider delayDuration={0} key={tech.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="icon border flex justify-center items-center p-4 bg-accent/25 rounded-lg">
                      {tech.name === "Vercel" ? (
                        <span className=" flex items-center justify-center w-[2rem] h-[2rem] text-[2rem] font-bold">
                          &#9650;
                        </span>
                      ) : (
                        <tech.icon className="h-[2rem] w-[2rem]" />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="px-2 py-1 text-xs">
                    {tech.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
