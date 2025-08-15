// React Compiler is enabled; explicit memoization is typically unnecessary.

interface SectionHeadingProps {
  readonly title: string;
  // Semantic heading level. Default to h2 for sections; use h1 for the page title.
  readonly as?: "h1" | "h2" | "h3";
}

function SectionHeading({ title, as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  return (
    <Tag className="mb-10 sm:mb-14 text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors">
      {title}
    </Tag>
  );
}

export default SectionHeading;
