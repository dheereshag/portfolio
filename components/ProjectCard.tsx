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
      className={`hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl cursor-pointer transition-colors duration-200 ${className}`}
    >
      <CardContent>
        <CompanyAvatar
          logo={logo}
          name={name}
          sizeClass="size-9 sm:size-10"
          imageSizeClass="size-5 sm:size-6"
        />
        <h2 className="mt-4 sm:mt-6 font-semibold text-zinc-800 dark:text-zinc-100">
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200"
          >
            {name}
          </Link>
        </h2>
        <p className="mt-1 sm:mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} at ${link.label}`}
          className="mt-4 sm:mt-6 flex text-xs sm:text-sm font-medium text-zinc-400 transition-colors duration-200 dark:text-zinc-200 items-center gap-2 hover:text-zinc-600 dark:hover:text-blue-400"
        >
          <Chain className="h-4 w-4" aria-hidden="true" />
          <span>{link.label}</span>
        </Link>
      </CardContent>
    </Card>
  );
}

// Memoize the component for better performance
export default memo(ProjectCard);
