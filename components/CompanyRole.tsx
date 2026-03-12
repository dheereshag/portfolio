import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";

interface CompanyRoleProps {
  readonly role: Role;
  readonly isLast?: boolean;
}

function CompanyRole({ role, isLast = false }: CompanyRoleProps) {
  const hasSubRoles = role.roles && role.roles.length > 0;

  return (
    <li className={`relative flex gap-3 sm:gap-4 items-start ${!isLast ? "pb-10" : ""}`}>
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

      <div className="flex flex-col flex-auto min-w-0 pt-1.5">
        {/* Company header row */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold text-foreground text-sm">{role.company}</span>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            <time dateTime={role.start}>{role.start}</time>
            <span aria-hidden="true" className="mx-1">—</span>
            <time dateTime={role.end}>{role.end}</time>
          </span>
        </div>

        {hasSubRoles ? (
          <ol className="flex flex-col mt-4 ml-2">
            {role.roles!.map((subRole, idx) => (
              <li
                key={`${subRole.title}-${subRole.start}`}
                className="relative flex gap-4 items-start pb-6 last:pb-0"
              >
                {/* Line connecting dots */}
                {idx !== role.roles!.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute w-px bg-border"
                    style={{
                      top: "20px",
                      left: "7px",
                      height: "calc(100% - 14px)",
                    }}
                  />
                )}

                {/* Dot */}
                <div
                  aria-hidden="true"
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: "2px",
                    position: "relative",
                    zIndex: 10,
                    backgroundColor: "hsl(var(--muted-foreground))",
                    opacity: 0.5,
                  }}
                />

                <dl className="flex flex-col gap-1 min-w-0">
                  <dt className="sr-only">Role</dt>
                  <dd className="text-sm font-semibold text-foreground leading-snug">
                    {subRole.title}
                  </dd>
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
          <p className="text-sm text-muted-foreground mt-1">{role.title}</p>
        )}
      </div>
    </li>
  );
}

export default CompanyRole;