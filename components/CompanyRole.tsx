import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";
import Link from "next/link";

interface CompanyRoleProps {
  readonly role: Role;
  readonly isLast?: boolean;
}

const AVATAR_WIDTH = 36;  // w-9  = 36px
const GAP = 12;            // gap-3 = 12px
const DOT_SIZE = 10;       // px
const LINE_WIDTH = 2;      // px
const DOT_TOP_OFFSET = 4;  // mt equivalent so dot sits at the same vertical position as before

function CompanyRole({ role, isLast = false }: CompanyRoleProps) {
  const hasSubpromotions = role.promotions && role.promotions.length > 0;

  return (
    <li className={!isLast ? "mb-6" : ""}>

      {/* ── Row 1: Avatar + Company name ── */}
      <div className="flex gap-3 items-center">
        <div className="w-9 flex-shrink-0" >
          <CompanyAvatar
            logo={role.logo}
            name={role.company}
            sizeClass="size-9"
            imageSizeClass="size-4"
            href={role.website}
            ariaLabel={`Visit ${role.company} website`}
          />
        </div>

        <div className="flex flex-col min-w-0">
          <Link
            href={role.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground text-sm hover:text-muted-foreground transition-colors duration-200 leading-snug"
          >
            {role.company}
          </Link>

          {/* Single role: show title + dates inline under company */}
          {!hasSubpromotions && (
            <>
              <p className="text-sm text-muted-foreground mt-0.5">{role.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                <time dateTime={role.start}>{role.start}</time>
                <span aria-hidden="true" className="mx-1">—</span>
                <time dateTime={role.end}>{role.end}</time>
              </p>
            </>
          )}
        </div>
      </div>

      {/* ── Row 2+: Sub-promotions timeline ── */}
      {hasSubpromotions && (
        <ol className="mt-2">
          {role.promotions!.map((subRole, idx) => {
            const isLastSubRole = idx === role.promotions!.length - 1;
            return (
              <li
                key={`${subRole.title}-${subRole.start}`}
                className="flex gap-3 items-start"
              >
                
                <div
                  aria-hidden="true"
                  className="flex-shrink-0"
                  style={{ width: `${AVATAR_WIDTH}px`, alignSelf: "stretch" }}
                >
                  <div
                    className="flex flex-col items-center"
                    style={{ height: "100%" }}
                  >
                    {/* top spacer */}
                    <div style={{ height: `${DOT_TOP_OFFSET}px`, flexShrink: 0 }} />

                    {/* dot */}
                    <div
                      className="rounded-full"
                      style={{
                        width: `${DOT_SIZE}px`,
                        height: `${DOT_SIZE}px`,
                        flexShrink: 0,
                        backgroundColor: "oklch(0.556 0 0)",
                      }}
                    />

                    {/* line — flex-1 now has a definite 100%-height parent */}
                    {!isLastSubRole && (
                      <div
                        style={{
                          flex: 1,
                          width: `${LINE_WIDTH}px`,
                          marginTop: "3px",
                          backgroundColor: "oklch(0.35 0 0)",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Right column: sub-role text */}
                <div className={`flex flex-col min-w-0 ${!isLastSubRole ? "pb-5" : ""}`}>
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