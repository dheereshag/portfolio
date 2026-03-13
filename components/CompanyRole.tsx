import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";
import Link from "next/link";

interface CompanyRoleProps {
  readonly role: Role;
  readonly isLast?: boolean;
}

function CompanyRole({ role, isLast = false }: CompanyRoleProps) {
  const hasSubRoles = role.roles && role.roles.length > 0;

  return (
    <li className={`flex flex-col ${!isLast ? "mb-6" : ""}`}>
      <div className="flex gap-3 sm:gap-4 items-start">
      {/* Avatar */}
      <div className="flex-shrink-0 z-10 w-9 sm:w-10 flex justify-center">
        <CompanyAvatar
          logo={role.logo}
          name={role.company}
          sizeClass="size-9 sm:size-10"
          imageSizeClass="size-4 sm:size-5"
          href={role.website}
          ariaLabel={`Visit ${role.company} website`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-auto min-w-0 pt-1">

        {/* Company name */}
        <Link
          href={role.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground text-sm hover:text-muted-foreground transition-colors duration-200 leading-snug"
        >
          {role.company}
        </Link>

        {/* No sub-roles: show title + dates */}
        {!hasSubRoles && (
          <>
            <p className="text-sm text-muted-foreground mt-0.5">{role.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              <time dateTime={role.start}>{role.start}</time>
              <span aria-hidden="true" className="mx-1">—</span>
              <time dateTime={role.end}>{role.end}</time>
            </p>
          </>
        )}

        {/* Sub-roles */}
        
      </div>
      </div>
      {hasSubRoles && (
          <ol className="mt-3 flex flex-col" style={{ paddingLeft: "14px" }}>
            {role.roles!.map((subRole, idx) => {
              const isLastSubRole = idx === role.roles!.length - 1;
              return (
                <li key={`${subRole.title}-${subRole.start}`} className="relative flex gap-3 items-start">

                  {/* Dot + connector line column */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: "10px" }}>
                    {/* Dot */}
                    <div
                      className="flex-shrink-0 rounded-full bg-muted border border-muted-foreground/40 z-10"
                      style={{ width: "10px", height: "10px", marginTop: "4px" }}
                      aria-hidden="true"
                    />
                    {/* Connector line to next dot */}
                    {!isLastSubRole && (
                      <div
                        className="flex-1 bg-border"
                        style={{ width: "1px", minHeight: "32px" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Sub-role text */}
                  <div className={`flex flex-col min-w-0 ${!isLastSubRole ? "pb-4" : ""}`}>
                    <span className="text-sm font-semibold text-foreground leading-snug">
                      {subRole.title}
                    </span>
                    <span className="text-xs text-muted-foreground mt-0.5">
                      <time dateTime={subRole.start}>{subRole.start}</time>
                      <span aria-hidden="true" className="mx-1">—</span>
                      <time dateTime={subRole.end}>{subRole.end}</time>
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
    </li>
  );
}

export default CompanyRole;