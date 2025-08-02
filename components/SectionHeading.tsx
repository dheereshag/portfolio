import { memo } from "react";

interface SectionHeadingProps {
  readonly title: string;
}

function SectionHeading({
  title,
}: SectionHeadingProps) {
  return (
    <h1
      className="mb-10 sm:mb-14 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
    >
      {title}
    </h1>
  );
}

export default memo(SectionHeading);
