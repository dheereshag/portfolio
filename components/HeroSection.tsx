import { memo } from "react";
import SectionHeading from "./SectionHeading";

interface HeroSectionProps {
  title: string;
  description: string;
}

function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto text-center mb-12 sm:mb-16">
      <SectionHeading title={title} />
      <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-medium">
        {description}
      </p>
    </section>
  );
}

export default memo(HeroSection);
