import { socials, projects, CONTENT } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Resume from "@/components/Resume";
import SectionHeading from "@/components/SectionHeading";
import Email from "@/components/Email";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans min-h-screen px-3 py-6 sm:px-8 sm:py-12 md:px-16 md:py-20">
      {/* Hero Section */}
      <HeroSection
        title={CONTENT.HERO.TITLE}
        description={CONTENT.HERO.DESCRIPTION}
      />

      {/* Social Links */}
      <section
        className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 mb-16 sm:mb-20"
        aria-label="Social media links"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.label}
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        ))}
      </section>

      {/* Projects Section */}
      <HeroSection
        title={CONTENT.PROJECTS.TITLE}
        description={CONTENT.PROJECTS.DESCRIPTION}
      />

      <section
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10 mb-16 sm:mb-20 lg:max-w-6xl"
        aria-label="Featured projects"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
            logo={project.logo}
          />
        ))}
      </section>

      <SectionHeading title={CONTENT.ABOUT.TITLE} />

      {/* About Section */}
      <section className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 mb-12 sm:mb-16">
        <AboutSection descriptions={CONTENT.ABOUT.DESCRIPTIONS} />

        {/* Resume and Contact Section */}
        <aside className="flex flex-col gap-8 sm:gap-10 mt-6 lg:mt-0">
          <Resume />
          <Email />
        </aside>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
