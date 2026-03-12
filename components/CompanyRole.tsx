import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";

interface CompanyRoleProps {
  readonly role: Role;
  readonly isLast?: boolean;
}

function CompanyRole({ role, isLast = false }: CompanyRoleProps) {
  const hasSubRoles = role.roles && role.roles.length > 0;

  return (
    <li className={`relative flex gap-3 sm:gap-4 items-start ${!isLast ? "pb-8" : ""}`}>
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute top-5 left-[18px] sm:left-5 w-px h-full bg-border"
        />
      )}

      <div className="relative z-10 flex-shrink-0">
        <CompanyAvatar
          logo={role.logo}
          name={role.company}
          sizeClass="size-9 sm:size-10"
          imageSizeClass="size-4 sm:size-5"
          href={role.website}
          ariaLabel={`Visit ${role.company} website`}
        />
      </div>

      <div className="flex flex-col flex-auto min-w-0 pt-1 gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-foreground text-sm">{role.company}</span>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            <time dateTime={role.start}>{role.start}</time>
            <span aria-hidden="true" className="mx-1">—</span>
            <time dateTime={role.end}>{role.end}</time>
          </span>
        </div>

        {hasSubRoles ? (
          <ol className="flex flex-col gap-3">
            {role.roles!.map((subRole, idx) => (
              <li key={`${subRole.title}-${subRole.start}`} className="relative flex gap-3 items-start">
                {idx !== role.roles!.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-2 left-[5px] w-px h-full bg-border"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-1.5 flex-shrink-0 size-2.5 rounded-full border-2 border-muted-foreground bg-background"
                />
                <dl className="flex flex-auto flex-wrap gap-1 min-w-0">
                  <dt className="sr-only">Role</dt>
                  <dd className="w-full flex-none text-sm text-foreground">{subRole.title}</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-xs text-muted-foreground">
                    <time dateTime={subRole.start}>{subRole.start}</time>
                    <span aria-hidden="true" className="mx-1">—</span>
                    <time dateTime={subRole.end}>{subRole.end}</time>
                  </dd>
                </dl>
              </li>
            ))}
          </ol>
        ) : (
          <dl className="flex flex-auto flex-wrap gap-1 min-w-0">
            <dt className="sr-only">Role</dt>
            <dd className="text-sm text-muted-foreground">{role.title}</dd>
          </dl>
        )}
      </div>
    </li>
  );
}

export default CompanyRole;