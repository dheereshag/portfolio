interface AboutSectionProps {
  descriptions: string[];
}

export default function AboutSection({ descriptions }: AboutSectionProps) {
  return (
    <article className="flex flex-col gap-2 sm:gap-3 max-w-full sm:max-w-2xl md:max-w-3xl px-2 sm:px-0">
      {descriptions.map((desc, index) => (
        <p
          key={index}
          className="leading-relaxed text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl"
        >
          {desc}
        </p>
      ))}
    </article>
  );
}
