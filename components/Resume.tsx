import { ArrowDownIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompanyRole from "@/components/CompanyRole";

import { resume } from "@/lib/data";

export default function Resume() {
  return (
    <Card className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl">
      <CardHeader>
        <h2 className="flex font-semibold gap-2 items-center">
          <BriefcaseIcon className="h-6 w-6" />
          <span>Work</span>
        </h2>
      </CardHeader>
      <CardContent>
        <ol className="space-y-8">
          {resume.map((role, roleIndex) => (
            <CompanyRole key={roleIndex} role={role} />
          ))}
        </ol>
        <Button variant="outline" className="mt-6 w-full" asChild>
          <Link
            href="/Dheeresh_Agarwal_Resume.pdf"
            download
            className="flex items-center justify-center gap-2"
          >
            Download CV
            <ArrowDownIcon className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
