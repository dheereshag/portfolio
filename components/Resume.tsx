import { BriefcaseIcon } from "lucide-react";
import DownloadCvButton from "@/components/DownloadCvButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompanyRole from "@/components/CompanyRole";
import { resume } from "@/lib/data";
import { memo } from "react";

function Resume() {
  return (
    <Card className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl transition-colors duration-200">
      <CardHeader>
        <h4 className="flex font-semibold gap-2 items-center">
          <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sm:text-lg">Work Experience</span>
        </h4>
      </CardHeader>
      <CardContent>
        <section aria-label="Professional experience">
          <ol className="space-y-4 sm:space-y-6 md:space-y-8">
            {resume.map((role) => (
              <CompanyRole key={`${role.company}-${role.start}`} role={role} />
            ))}
          </ol>
        </section>
        <DownloadCvButton />
      </CardContent>
    </Card>
  );
}

export default memo(Resume);
