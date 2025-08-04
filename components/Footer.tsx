import { CONTACT } from "@/lib/constants";
import { memo, useMemo } from "react";

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="flex flex-col items-center justify-between gap-6 md:flex-row border-t border-border">
      <p className="text-sm text-muted-foreground mt-10">
        &copy; {currentYear} {CONTACT.NAME}. All rights reserved.
      </p>
    </footer>
  );
}

export default memo(Footer);
