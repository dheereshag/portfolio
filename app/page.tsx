import { socials, projects } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Resume from "@/components/Resume";
import SectionHeading from "@/components/SectionHeading";
import Email from "@/components/Email";

export default function Home() {
  return (
    <main className="font-sans min-h-screen px-3 py-6 sm:px-8 sm:py-12 md:px-16 md:py-20">
      {/* Intro */}
      <article className="mb-8 sm:mb-12">
        <HeroSection
          title="Software engineer, learner, and amateur photographer."
          description="I'm Dheeresh, a software engineer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </article>

      {/* Social Links */}
      <section className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        ))}
      </section>

      {/* Projects Section */}
      <article className="mt-12 sm:mt-20 mb-8 sm:mb-12">
        <HeroSection
          title="Things I've made trying to put my dent in the universe."
          description="I've worked on tons of little projects over the years but these are the
        ones that I'm most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved."
        />
      </article>

      <article className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10 mb-10 sm:mb-16 lg:max-w-6xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
            logo={project.logo}
          />
        ))}
      </article>
      <SectionHeading title="About Me" />
      {/* About Section */}
      <article className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-10">
        <AboutSection
          descriptions={[
            "I'm a software engineer with a passion for building things.I love working with JavaScript and have experience with frameworks like React and Next.js.",
            "In my free time, I enjoy photography and exploring the outdoors.",
          ]}
        />
        {/* Resume Section */}
        <section className="flex flex-col gap-6 sm:gap-10 mt-6 lg:mt-0">
          <Resume />
          <Email />
        </section>
      </article>
    </main>
  );
}
