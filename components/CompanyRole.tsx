import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";
import Link from "next/link";
import { memo } from "react";

interface CompanyRoleProps {
  readonly role: Role;
}

function CompanyRole({ role }: CompanyRoleProps) {
  return (
    <li className="flex gap-3 sm:gap-4 items-start">
      <Link
        href={role.website}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 hover:opacity-80 transition-opacity duration-200"
        aria-label={`Visit ${role.company} website`}
      >
        <CompanyAvatar
          logo={role.logo}
          name={role.company}
          sizeClass="size-9 sm:size-10"
          imageSizeClass="size-4 sm:size-5"
        />
      </Link>
      <dl className="flex flex-auto flex-wrap gap-1 sm:gap-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none font-medium text-zinc-800 dark:text-zinc-100">
          <Link
            href={role.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200"
          >
            {role.company}
          </Link>
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-sm text-zinc-600 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs sm:text-sm text-zinc-500 dark:text-zinc-400"
          aria-label={`${role.start} until ${role.end}`}
        >
          <time dateTime={role.start}>{role.start}</time>
          <span aria-hidden="true" className="mx-1">
            —
          </span>
          <time dateTime={role.end}>{role.end}</time>
        </dd>
      </dl>
    </li>
  );
}

export default memo(CompanyRole);
