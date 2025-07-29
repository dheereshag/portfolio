import { ArrowDownIcon, BriefcaseIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CompanyRole from "@/components/CompanyRole";
import type { Role } from "@/lib/types";

export default function Resume() {
  const resume: Array<Role> = [
    {
      company: "TaxHoa",
      title: "Software Engineer",
      logo: "/ci.svg",
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Airbnb",
      title: "Software Engineer",
      logo: "/ci.svg",
      start: "2014",
      end: "2019",
    },
  ];

  return (
    <Card className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 bg-transparent rounded-2xl">
      <CardHeader>
        <h2 className="flex text-sm font-semibold">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
      </CardHeader>
      <CardContent>
        <ol className="space-y-8">
          {resume.map((role, roleIndex) => (
            <CompanyRole key={roleIndex} role={role} />
          ))}
        </ol>
        <Button variant="secondary" className="mt-6 w-full" asChild>
          <Link href="#" className="flex items-center justify-center gap-2">
            Download CV
            <ArrowDownIcon className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
