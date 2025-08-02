import { socials, projects, CONTENT } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import Resume from "@/components/Resume";
import SectionHeading from "@/components/SectionHeading";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { CONTACT, ASSET_PATHS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${CONTACT.NAME} - Software Engineer Portfolio`,
  description: CONTENT.HERO.DESCRIPTION,
  keywords: [
    "software engineer portfolio",
    "react developer",
    "next.js developer",
    "typescript developer",
    "full stack developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "javascript developer",
    "node.js developer",
    "dheeresh agarwal",
    "ringcentral",
    "taxhoa",
    "iit bhubaneswar",
    "indian institute of technology bhubaneswar",
    "iitbbs",
  ],
  alternates: {
    canonical: "https://dheereshagrwal.vercel.app",
  },
  openGraph: {
    title: `${CONTACT.NAME} - Software Engineer Portfolio`,
    description: CONTENT.HERO.DESCRIPTION,
    type: "profile",
    url: "https://dheereshagrwal.vercel.app",
    images: [
      {
        url: ASSET_PATHS.LOGOS.PORTFOLIO,
        width: 1200,
        height: 630,
        alt: `${CONTACT.NAME} Portfolio Screenshot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.NAME} - Software Engineer Portfolio`,
    description: CONTENT.HERO.DESCRIPTION,
    images: [ASSET_PATHS.LOGOS.PORTFOLIO],
  },
};

export default function Home() {
  return (
    <main className="font-sans min-h-screen px-5 sm:px-8 md:px-16 py-12 md:py-20">
      {/* Hero Section */}
      <header id="home">
        <HeroSection
          title={CONTENT.HERO.TITLE}
          description={CONTENT.HERO.DESCRIPTION}
        />

        {/* Social Links Navigation */}
        <nav
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
        </nav>
      </header>

      {/* Projects Section */}
      <section id="projects">
        <HeroSection
          title={CONTENT.PROJECTS.TITLE}
          description={CONTENT.PROJECTS.DESCRIPTION}
        />

        <article
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
        </article>
      </section>

      <SectionHeading title={CONTENT.ABOUT.TITLE} level={2} />

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col xl:flex-row gap-8 sm:gap-12 mb-12 sm:mb-16 max-w-6xl mx-auto"
      >
        <AboutSection descriptions={CONTENT.ABOUT.DESCRIPTIONS} />

        {/* Resume and Contact Section */}
        <aside
          id="contact"
          className="flex flex-col gap-8 sm:gap-10 items-center"
          aria-label="Professional information and contact"
        >
          <Resume />
          <Email />
        </aside>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
