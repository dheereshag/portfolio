import { IconType } from "react-icons";
import Link from "next/link";

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
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
    >
      <Icon size={size} />
    </Link>
  );
}
