import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { CONTACT } from "@/lib/constants";
import { memo } from "react";

function Email() {
  return (
    <Link
      href={`mailto:${CONTACT.EMAIL}`}
      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
      aria-label={`Send email to ${CONTACT.EMAIL}`}
    >
      <IoMail size={16} aria-hidden="true" />
      {CONTACT.EMAIL}
    </Link>
  );
}

export default memo(Email);
