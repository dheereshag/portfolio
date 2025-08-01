import { CONTACT } from "@/lib/constants";
import { memo } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-between gap-6 md:flex-row border-t border-zinc-100 dark:border-zinc-700/40">
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-10">
        &copy; {currentYear} {CONTACT.NAME}. All rights reserved.
      </p>
    </footer>
  );
}

export default memo(Footer);
