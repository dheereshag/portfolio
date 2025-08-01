import { memo } from "react";

interface AboutSectionProps {
  readonly descriptions: readonly string[];
}

function AboutSection({ descriptions }: AboutSectionProps) {
  return (
    <article className="flex flex-col gap-4 sm:gap-6 max-w-full sm:max-w-3xl md:max-w-4xl px-2 sm:px-0">
      {descriptions.map((desc, index) => (
        <p
          key={index}
          className="leading-relaxed text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl md:text-2xl font-medium"
        >
          {desc}
        </p>
      ))}
    </article>
  );
}

export default memo(AboutSection);
