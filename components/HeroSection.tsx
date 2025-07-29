import SectionHeading from "./SectionHeading";

interface HeroSectionProps {
  title: string;
  description: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <article className="max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0">
      <SectionHeading title={title} />
      <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl">
        {description}
      </p>
    </article>
  );
}
