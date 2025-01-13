import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Career } from "@/data/career";

// Function to calculate the duration in years and months
const calculateDuration = (duration: string): string => {
  const [start, end] = duration.split(" - ").map((date) => date.trim());

  const parseDate = (dateStr: string): Date => {
    const [monthOrYear, year] = dateStr.split(" ");
    if (year) {
      // If the date includes a month (e.g., "NOV 2021")
      const month = new Date(`${monthOrYear} 1, ${year}`).getMonth();
      return new Date(parseInt(year), month);
    } else {
      // If the date is just a year (e.g., "2017"), default to January for start and December for end
      const yearInt = parseInt(monthOrYear);
      return dateStr === start
        ? new Date(yearInt, 0) // Start of the year (January)
        : new Date(yearInt, 11); // End of the year (December)
    }
  };

  const startDate = parseDate(start);
  const endDate = parseDate(end);

  // Inclusive: Add one month to include the last month in the range
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth() + 1);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);

  return parts.join(" and ");
};

export default function Tab() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea className="w-full">
        <TabsList className="h-auto rounded-none border-b border-border bg-transparent p-0 w-full">
          {/* Dynamically render Tabs with icons */}
          {Career.map((category, index) => (
            <TabsTrigger
              key={index}
              value={`tab-${index + 1}`}
              className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
            >
              {category.icon && (
                <category.icon
                  className="h-[1.2rem] w-[1.2rem] mb-1.5"
                  aria-hidden="true"
                />
              )}
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar className="h-0" orientation="horizontal" />
      </ScrollArea>

      {Career.map((category, index) => (
        <TabsContent key={index} value={`tab-${index + 1}`}>
          <div className="px-[0rem] pt-[1.5rem]">
            <ul style={{ paddingLeft: ".5rem" }}>
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="relative border-l pb-6  pl-6 border-l-primary"
                  style={{ borderLeftWidth: ".1rem" }}
                >
                  <div
                    className={`absolute top-0 flex items-center justify-center rounded-full border ${
                      itemIndex === 0
                        ? "border-primary bg-green-300"
                        : "border-primary bg-background"
                    }`}
                    aria-hidden="true"
                    style={{
                      width: "16px",
                      height: "16px",
                      left: "-9px",
                      borderWidth: "2px",
                    }}
                  ></div>
                  <div className="mb-1 text-base font-semibold leading-none">
                    {"title" in item ? item.title : item.name}
                  </div>

                  {category.category === "Experience" && (
                    <div className="pt-[.5rem] text-sm">{item.type}</div>
                  )}
                  <div className="pt-[.5rem] text-sm">
                    {"institution" in item ? item.institution : item.company}
                  </div>
                  <div className="pt-[.1rem] text-sm">{item.location}</div>

                  <div className="pt-[.5rem] text-sm">
                    <span className="block md:inline">{item.duration}</span>
                    <span className="hidden md:inline"> • </span>
                    <span className="block md:inline">
                      {calculateDuration(item.duration)}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground pt-[.5rem]">
                    {"description" in item &&
                      item.description &&
                      item.description.map((desc, i) => (
                        <span key={i}>
                          {desc} <br />
                        </span>
                      ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
