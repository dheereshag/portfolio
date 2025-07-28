import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { Link as Chain } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  logo: string; // Path to the logo image
}

export default function ProjectCard({
  name,
  description,
  link,
  logo,
}: ProjectCardProps) {
  return (
    <li className="group flex flex-col cursor-pointer">
      <Card className="border-0 shadow-none bg-transparent p-0 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 transition-colors rounded-2xl">
        <CardContent className="p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={logo} alt={`${name} logo`} width={32} height={32} />
          </div>
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
    </li>
  );
}
