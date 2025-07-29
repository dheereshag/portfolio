import type { IconType } from "react-icons";
import { inter } from "@/lib/fonts";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialIconProps {
  href: string;
  icon: IconType;
  label: string;
  size?: number;
}

export default function SocialIcon({
  href,
  icon: Icon,
  label,
  size = 20,
}: SocialIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Icon size={size} />
          </Link>
        </TooltipTrigger>
        <TooltipContent className={`${inter.className} px-2 py-1 text-xs `}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
