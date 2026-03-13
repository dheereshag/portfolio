import type { Role } from "@/lib/types";
import CompanyAvatar from "@/components/CompanyAvatar";
import Link from "next/link";

interface CompanyRoleProps {
  readonly role: Role;
  readonly isLast?: boolean;
}

/*
 * Layout blueprint (matching LinkedIn reference):
 *
 * [Avatar 36px] [gap 12px] [Company Name text]
 *     ↑                         ↑
 *  same 36px col            text col starts here
 *
 * Sub-roles row:
 * [  dot  ] [gap] [ Role title        ]
 * [ line  ]      [ date range         ]
 *
 * The dot column is exactly 36px wide (= avatar width),
 * so the dot center aligns with the avatar center.
 * The role text starts at 36px + 12px gap = 48px from the left,
 * exactly matching where the company name starts.
 */

const AVATAR_WIDTH = 36;   // w-9 = 36px
const GAP = 12;            // gap-3 = 12px
const DOT_SIZE = 10;
const LINE_WIDTH = 2;

// dot is centered in the avatar column
const DOT_LEFT = Math.round((AVATAR_WIDTH - DOT_SIZE) / 2);          // = 13px
const LINE_LEFT = Math.round((AVATAR_WIDTH - LINE_WIDTH) / 2);        // = 17px
const DOT_TOP = 4;
const LINE_TOP = DOT_TOP + DOT_SIZE + 3;                              // = 17px

function CompanyRole({ role, isLast = false }: CompanyRoleProps) {
  const hasSubRoles = role.roles && role.roles.length > 0;

  return (
    <li className={!isLast ? "mb-6" : ""}>

      {/* ── Row 1: Avatar + Company name ── */}
      <div className="flex gap-3 items-center">
        <div className="flex-shrink-0" style={{ width: `${AVATAR_WIDTH}px` }}>
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
        </div>
      </div>

      {/* ── Row 2: Sub-roles timeline (only if hasSubRoles) ── */}
      {hasSubRoles && (
        <ol className="mt-2">
          {role.roles!.map((subRole, idx) => {
            const isLastSubRole = idx === role.roles!.length - 1;
            return (
              <li
                key={`${subRole.title}-${subRole.start}`}
                className="relative flex items-start"
                /*
                 * paddingLeft = AVATAR_WIDTH + GAP
                 * This pushes the text to start exactly where the company name starts.
                 * The dot + line are absolutely positioned within [0 .. AVATAR_WIDTH].
                 */
                style={{ paddingLeft: `${AVATAR_WIDTH + GAP}px` }}
              >
                {/* Dot — centered horizontally in the avatar column */}
                <div
                  aria-hidden="true"
                  className="absolute rounded-full z-10"
                  style={{
                    width: `${DOT_SIZE}px`,
                    height: `${DOT_SIZE}px`,
                    top: `${DOT_TOP}px`,
                    left: `${DOT_LEFT}px`,
                    backgroundColor: "oklch(0.556 0 0)",
                  }}
                />

                {/* Vertical line — centered on the dot, only between items */}
                {!isLastSubRole && (
                  <div
                    aria-hidden="true"
                    className="absolute"
                    style={{
                      width: `${LINE_WIDTH}px`,
                      top: `${LINE_TOP}px`,
                      bottom: "0px",
                      left: `${LINE_LEFT}px`,
                      backgroundColor: "oklch(0.35 0 0)",
                    }}
                  />
                )}

                {/* Sub-role text — starts at paddingLeft, aligned with company name */}
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