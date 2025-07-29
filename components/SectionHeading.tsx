interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h1 className="mb-8 sm:mb-12 text-center text-2xl sm:text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
      {title}
    </h1>
  );
}
