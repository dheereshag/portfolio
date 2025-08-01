"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { memo } from "react";

interface CompanyAvatarProps {
  readonly logo: string;
  readonly name: string;
  readonly sizeClass?: string;
  readonly imageSizeClass?: string;
  readonly className?: string;
}

function CompanyAvatar({
  logo,
  name,
  sizeClass = "size-10",
  imageSizeClass = "size-5",
  className = "",
}: CompanyAvatarProps) {
  const getInitials = (companyName: string): string => {
    return companyName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
  };

  return (
    <Avatar
      className={`items-center justify-center dark:border dark:border-zinc-700/50 dark:bg-zinc-800 ${sizeClass} ${className}`}
    >
      <AvatarImage
        src={logo}
        alt={`${name} logo`}
        className={imageSizeClass}
        loading="lazy"
      />
      <AvatarFallback
        className="text-xs font-semibold"
        aria-label={`${name} initials`}
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}

export default memo(CompanyAvatar);
