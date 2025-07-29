import SectionHeading from "./SectionHeading";

interface HeroSectionProps {
  title: string;
  description: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <SectionHeading title={title} />
      <p className="text-zinc-600 dark:text-zinc-400 text-xl">
        {description}
      </p>
    </article>
  );
}
