import { memo } from "react";

interface SectionHeadingProps {
  readonly title: string;
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly className?: string;
}

function SectionHeading({
  title,
  level = 1,
  className = "",
}: SectionHeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={`mb-10 sm:mb-14 text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors ${className}`}
    >
      {title}
    </Tag>
  );
}

export default memo(SectionHeading);
