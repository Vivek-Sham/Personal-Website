import { SocialLinks } from "@/data/socials";

function Footer() {
  return (
    <footer className="mt-2 border-t pt-4 pb-4 px-2 flex justify-between mx-[0.5rem] sm:mx-[1.5rem] lg:mx-[7rem]  items-center">
      <p className="text-center text-sm/relaxed">
        <span className="px-[.2rem]">©</span>
        {new Date().getFullYear()}
        <span className="px-[.2rem]">•</span>Vivek Sham
      </p>
      <div className="flex gap-[.75rem] flex-row items-center justify-center">
        {SocialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.id}
              href={
                link.name === "Email"
                  ? `mailto:${link.url[0]}@${link.url[1]}.${link.url[2]}`
                  : link.url
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{link.name}</span>
              <IconComponent className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
