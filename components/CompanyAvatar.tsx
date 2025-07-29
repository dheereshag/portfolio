import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface CompanyAvatarProps {
  logo: string;
  name: string;
  sizeClass?: string; // e.g. "size-10"
  imageSizeClass?: string; // e.g. "size-5"
}

export default function CompanyAvatar({
  logo,
  name,
  sizeClass = "size-10",
  imageSizeClass = "size-5",
}: CompanyAvatarProps) {
  return (
    <Avatar
      className={`items-center justify-center dark:border dark:border-zinc-700/50 dark:bg-zinc-800 ${sizeClass}`}
    >
      <AvatarImage src={logo} alt={`${name} logo`} className={imageSizeClass} />
      <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
