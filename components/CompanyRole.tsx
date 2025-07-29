import CompanyAvatar from "@/components/CompanyAvatar";
import type { Role } from "@/lib/types";

export default function CompanyRole({ role }: { role: Role }) {
  return (
    <li className="flex gap-4">
      <CompanyAvatar
        logo={role.logo}
        name={role.company}
        avatarSize={10}
        imageSize={4}
      />
      <dl className="flex flex-auto flex-wrap gap-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none font-medium">
          {role.company}
        </dd>
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
