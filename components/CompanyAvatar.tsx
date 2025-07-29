import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CompanyAvatarProps {
  logo: string;
  name: string;
  avatarSize: number;
  imageSize: number;
}

export default function CompanyAvatar({ logo, name, avatarSize, imageSize }: CompanyAvatarProps) {
  return (
    <Avatar className={`h-${avatarSize} w-${avatarSize} dark:border dark:border-zinc-700/50 dark:bg-zinc-800 flex items-center justify-center`}>
      <AvatarImage src={logo} alt={`${name} logo`} className={`h-${imageSize} w-${imageSize}`} />
      <AvatarFallback className="text-xs font-medium dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
