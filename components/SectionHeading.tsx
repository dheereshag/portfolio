import { memo } from "react";

interface SectionHeadingProps {
  readonly title: string;
}

function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h1 className="mb-10 sm:mb-14 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors">
      {title}
    </h1>
  );
}

export default memo(SectionHeading);
