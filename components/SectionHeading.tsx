interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({
  title,
}: SectionHeadingProps) {
  return (
    <h1
      className="mb-12 text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
    >
      {title}
    </h1>
  );
}
