interface AboutSectionProps {
  descriptions: string[];
}

export default function AboutSection({ descriptions }: AboutSectionProps) {
  return (
    <article className="flex flex-col gap-2 max-w-3xl">
      {descriptions.map((desc, index) => (
        <p
          key={index}
          className="leading-relaxed text-zinc-600 dark:text-zinc-400 text-xl"
        >
          {desc}
        </p>
      ))}
    </article>
  );
}
