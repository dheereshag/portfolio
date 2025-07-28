import { IconType } from "react-icons";

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
  size = 24,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      aria-label={label}
    >
      <Icon size={size} />
    </a>
  );
}
