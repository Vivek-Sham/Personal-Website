import { SocialLinks } from "@/data/socials";

function Footer() {
  return (
    <footer className="border-t">
      <div className="border-x p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mx-[1.5rem] sm:mx-[2rem] lg:mx-[4rem]">
        <p className="text-center text-sm/relaxed order-2 sm:order-1">
          <span className="px-[.2rem]">©</span>
          {new Date().getFullYear()}
          <span className="px-[.2rem]">•</span>Vivek Sham
        </p>
        <div className="flex flex-row items-center justify-center  gap-[.75rem] order-1 sm:order-2">
          {SocialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={
                  link.name === "Email"
                    ? `mailto:${link.url[0]}@${link.url[1]}.${link.url[2]}`
                    : Array.isArray(link.url)
                    ? link.url.join("")
                    : link.url
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                <IconComponent className="h-[1.5rem] w-[1.5rem] transition-all hover:text-primary text-muted-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
