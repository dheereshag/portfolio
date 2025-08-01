import Link from "next/link";
import { Link as Chain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CompanyAvatar from "@/components/CompanyAvatar";
import { memo } from "react";
import type { Project } from "@/lib/types";

interface ProjectCardProps
  extends Pick<Project, "name" | "description" | "link" | "logo"> {
  readonly className?: string;
}

function ProjectCard({
  name,
  description,
  link,
  logo,
  className = "",
}: ProjectCardProps) {
  return (
    <Card
      className={`hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/10 dark:hover:shadow-zinc-800/20 ${className}`}
    >
      <CardContent>
          <CompanyAvatar
            logo={logo}
            name={name}
            sizeClass="size-10 sm:size-12"
            imageSizeClass="size-6 sm:size-7"
          />
        <h2 className="mt-6 sm:mt-8 font-semibold text-lg sm:text-xl text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-all duration-300"
          >
            {name}
          </Link>
        </h2>
        <p className="mt-3 sm:mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
          {description}
        </p>
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} at ${link.label}`}
          className="mt-6 sm:mt-8 flex text-sm font-medium text-zinc-400 transition-all duration-300 dark:text-zinc-200 items-center gap-2 hover:text-zinc-600 dark:hover:text-blue-400 group"
        >
          <Chain
            className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12"
            aria-hidden="true"
          />
          <span>{link.label}</span>
        </Link>
      </CardContent>
    </Card>
  );
}

// Memoize the component for better performance
export default memo(ProjectCard);
