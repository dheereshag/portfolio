import Link from "next/link";
import { Link as Chain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="cursor-pointer">
      <Card className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl">
        <CardContent>
          <Avatar className="h-10 w-10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 flex items-center justify-center">
            <AvatarImage src={logo} alt={`${name} logo`} className="h-7 w-7" />
            <AvatarFallback className="text-xs font-medium dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
              {name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <h2 className="mt-6 font-semibold text-zinc-800 dark:text-zinc-100">
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {name}
            </Link>
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex text-sm font-medium text-zinc-400 transition dark:text-zinc-200 items-center gap-2 dark:hover:text-blue-500"
          >
            <Chain className="h-4 w-4" />
            <span>{link.label}</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
