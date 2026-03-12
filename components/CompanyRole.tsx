import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";

interface CompanyRoleProps {
  readonly role: Role;
  readonly isLast?: boolean;
}

function CompanyRole({ role, isLast = false }: CompanyRoleProps) {
  const hasSubRoles = role.roles && role.roles.length > 0;

  return (
    <>
      {/* ── Company row ── */}
      <li className="relative flex gap-3 sm:gap-4 items-start pb-4">
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
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-foreground text-sm">{role.company}</span>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              <time dateTime={role.start}>{role.start}</time>
              <span aria-hidden="true" className="mx-1">—</span>
              <time dateTime={role.end}>{role.end}</time>
            </span>
          </div>
          {!hasSubRoles && (
            <p className="text-sm text-muted-foreground mt-1">{role.title}</p>
          )}
        </div>
      </li>

      
      {hasSubRoles && (
        <li className="relative flex gap-3 sm:gap-4 pb-6">
          
          <div
            className="relative flex-shrink-0 size-9 sm:size-10"
            aria-hidden="true"
          >
            
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "1px",
                backgroundColor: "rgba(150,150,150,0.35)",
              }}
            />
          </div>

          
          <ol className="flex flex-col gap-5 flex-auto min-w-0 pt-1">
            {role.roles!.map((subRole) => (
              <li
                key={`${subRole.title}-${subRole.start}`}
                className="relative flex items-center gap-3 sm:gap-4"
              >
                
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: "-36px",
                    width: "36px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(150,150,150,0.7)",
                      flexShrink: 0,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between gap-2 w-full">
                  <span className="font-semibold text-foreground text-sm">
                    {subRole.title}
                  </span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    <time dateTime={subRole.start}>{subRole.start}</time>
                    <span aria-hidden="true" className="mx-1">—</span>
                    <time dateTime={subRole.end}>{subRole.end}</time>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </li>
      )}

      
      {!isLast && (
        <li
          aria-hidden="true"
          style={{
            listStyle: "none",
            height: "1px",
            backgroundColor: "rgba(150,150,150,0.2)",
            marginBottom: "20px",
          }}
        />
      )}
    </>
  );
}

export default CompanyRole;