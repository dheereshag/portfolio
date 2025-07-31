import Link from "next/link";
import { Link as Chain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CompanyAvatar from "@/components/CompanyAvatar";

interface ProjectCardProps {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  logo: string;
}

export default function ProjectCard({
  name,
  description,
  link,
  logo,
}: ProjectCardProps) {
  return (
    <Card className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl cursor-pointer">
      <CardContent>
        <CompanyAvatar
          logo={logo}
          name={name}
          sizeClass="size-9 sm:size-10"
          imageSizeClass="size-5 sm:size-6"
        />
        <h2 className="mt-4 sm:mt-6 font-semibold text-zinc-800 dark:text-zinc-100">
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </h2>
        <p className="mt-1 sm:mt-2 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-6 flex text-xs sm:text-sm font-medium text-zinc-400 transition dark:text-zinc-200 items-center gap-2 dark:hover:text-blue-500"
        >
          <Chain className="h-4 w-4" />
          <span>{link.label}</span>
        </Link>
      </CardContent>
    </Card>
  );
}
