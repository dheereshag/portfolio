import type { Role } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CompanyRole({ role }: { role: Role }) {
  return (
    <li className="flex gap-4">
      <Avatar className="items-center justify-center dark:border dark:border-zinc-700/50 dark:bg-zinc-800 size-10">
        <AvatarImage
          src={role.logo}
          alt={`${role.company} logo`}
          className="size-5"
        />
        <AvatarFallback>{role.company.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <dl className="flex flex-auto flex-wrap gap-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none font-medium">{role.company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-sm text-muted-foreground">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-sm text-muted-foreground"
          aria-label={`${role.start} until ${role.end}`}
        >
          <time dateTime={role.start}>{role.start}</time>
          <span aria-hidden="true">—</span>
          <time dateTime={role.end}>{role.end}</time>
        </dd>
      </dl>
    </li>
  );
}
