import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { CONTACT } from "@/lib/constants";
import { memo } from "react";

function Email() {
  return (
    <address className="not-italic">
      <Link
        href={`mailto:${CONTACT.EMAIL}`}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label={`Send email to ${CONTACT.EMAIL}`}
      >
        <SiGmail size={16} aria-hidden="true" />
        {CONTACT.EMAIL}
      </Link>
    </address>
  );
}

export default memo(Email);
