import SectionHeading from "./SectionHeading";

interface AboutSectionProps {
  title: string;
  descriptions: string[];
}

export default function AboutSection({
  title,
  descriptions,
}: AboutSectionProps) {
  return (
    <article className="mx-auto">
      <SectionHeading title={title} />
      <div className="flex">
        <div className="mt-6 text-zinc-600 dark:text-zinc-400 text-xl">
          {descriptions.map((desc, index) => (
            <p key={index} className="leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
        <div className="mt-6 text-zinc-600 dark:text-zinc-400 text-xl">
          {descriptions.map((desc, index) => (
            <p key={index} className="leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
