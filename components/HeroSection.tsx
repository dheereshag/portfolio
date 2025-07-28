interface HeroSectionProps {
  title: string;
  description: string;
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        {title}
      </h1>
      <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-xl">{description}</p>
    </div>
  );
}
