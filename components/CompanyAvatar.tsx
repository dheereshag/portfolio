import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CompanyAvatarProps {
  logo: string;
  name: string;
}

export default function CompanyAvatar({ logo, name }: CompanyAvatarProps) {
  return (
    <Avatar className="h-10 w-10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 flex items-center justify-center">
      <AvatarImage src={logo} alt={`${name} logo`} className="h-7 w-7" />
      <AvatarFallback className="text-xs font-medium dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
