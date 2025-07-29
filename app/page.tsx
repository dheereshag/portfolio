import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from "react-icons/si";
import SocialIcon from "@/components/SocialIcon";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";

const socialLinks = [
  {
    href: "https://github.com/dheereshagrwal",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "https://codeforces.com/profile/dheereshagrwal",
    icon: SiCodeforces,
    label: "Codeforces",
  },
  {
    href: "https://leetcode.com/dheereshagrwal",
    icon: SiLeetcode,
    label: "LeetCode ",
  },
  {
    href: "https://linkedin.com/in/dheereshagrwal",
    icon: SiLinkedin,
    label: "LinkedIn",
  },
];

const projects = [
  {
    name: "Coloured Icons",
    description:
      "A CDN for coloured icons. It provides a simple way to use icons in your projects with customizable colors.",
    link: {
      href: "https://coloured-icons.vercel.app",
      label: "coloured-icons.vercel.app",
    },
    logo: "/ci.svg",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio website, showcasing my work and projects. Built with Next.js, Tailwind CSS, and React Icons.",
    link: {
      href: "https://dheereshagrwal.vercel.app",
      label: "dheereshagrwal.vercel.app",
    },
    logo: "/portfolio.png",
  },
  {
    name: "Vembric",
    description:
      "An API documentation template that helps you create beautiful and interactive API documentation on the web.",
    link: { href: "https://vembric.vercel.app", label: "vembric.vercel.app" },
    logo: "/vembric.svg",
  },
];

export default function Home() {
  return (
    <main className="font-sans min-h-screen px-8 py-12 sm:px-20 sm:py-20">
      {/* Intro */}
      <article className="mb-12">
        <HeroSection
          title="Software engineer, learner, and amateur photographer."
          description="I'm Dheeresh, a software engineer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </article>

      {/* Social Links */}
      <section className="flex justify-center items-center gap-8">
        {socialLinks.map((social, index) => (
          <SocialIcon
            key={index}
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        ))}
      </section>

      {/* Projects Section */}
      <article className="mt-20 mb-12">
        <HeroSection
          title="Things I've made trying to put my dent in the universe."
          description=" I've worked on tons of little projects over the years but these are the
        ones that I'm most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved."
        />
      </article>

      <article className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-16 lg:max-w-6xl">
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

      {/* About Section */}
      <article className="mb-12">
        <AboutSection
          title="About Me"
          descriptions={[
            "I'm a software engineer with a passion for building things.",
            "I love working with JavaScript and have experience with frameworks like React and Next.js.",
            "In my free time, I enjoy photography and exploring the outdoors.",
          ]}
        />
      </article>
    </main>
  );
}
