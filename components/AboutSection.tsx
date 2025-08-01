import { memo } from "react";

interface AboutSectionProps {
  readonly descriptions: readonly string[];
}

function AboutSection({ descriptions }: AboutSectionProps) {
  return (
    <article className="flex flex-col gap-4 sm:gap-6 max-w-2xl mx-auto">
      {descriptions.map((desc, index) => (
        <p
          key={index}
          className="leading-relaxed text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl font-medium"
        >
          {desc}
        </p>
      ))}
    </article>
  );
}

export default memo(AboutSection);
