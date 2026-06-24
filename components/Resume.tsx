import { BriefcaseIcon } from "lucide-react";
import DownloadCvButton from "@/components/DownloadCvButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompanyRole from "@/components/CompanyRole";
import { resume } from "@/lib/data";

function Resume() {
  return (
    <Card className="w-full hover:bg-accent bg-transparent rounded-2xl transition-colors duration-200">
      <CardHeader>
        <h4 className="flex font-semibold gap-3 items-center text-foreground">
          <BriefcaseIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span className="text-xl sm:text-2xl">Work Experience</span>
        </h4>
      </CardHeader>
      <CardContent>
        <section aria-label="Professional experience">
          <ol className="flex flex-col gap-8">
            {resume.map((role, idx) => (
              <CompanyRole
                key={`${role.company}-${role.start}`}
                role={role}
                isLast={idx === resume.length - 1}
              />
            ))}
          </ol>
        </section>
        <DownloadCvButton />
      </CardContent>
    </Card>
  );
}

export default Resume;