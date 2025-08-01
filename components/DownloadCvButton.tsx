import { memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { ASSET_PATHS } from "@/lib/constants";

function DownloadCvButton() {
  return (
    <Button variant="outline" className="mt-4 sm:mt-6 w-full" asChild>
      <Link
        href={ASSET_PATHS.RESUME}
        download
        className="flex items-center justify-center gap-2"
        aria-label="Download CV PDF"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Button>
  );
}

export default memo(DownloadCvButton);
