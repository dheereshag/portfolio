import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineExternalLink } from "react-icons/hi";
import SocialIcon from "@/components/SocialIcon";

import { Card } from "@/components/Card";
const socialLinks = [
  {
    href: "https://github.com/dheereshgrwal",
    icon: SiGithub,
    label: "GitHub Profile",
  },
  {
    href: "https://codeforces.com/profile/dheereshgrwal",
    icon: SiCodeforces,
    label: "Codeforces Profile",
  },
  {
    href: "https://leetcode.com/dheereshgrwal",
    icon: SiLeetcode,
    label: "LeetCode Profile",
  },
  {
    href: "https://linkedin.com/in/dheereshgrwal",
    icon: SiLinkedin,
    label: "LinkedIn Profile",
  },
];

const projects = [
  {
    name: "Planetaria",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    logo: RxAvatar,
  },
  {
    name: "Animaginary",
    description:
      "High performance web animation library, hand-written in optimized WASM.",
    link: { href: "#", label: "github.com" },
    logo: RxAvatar,
  },
];

export default function Home() {
  return (
    <main className="font-sans min-h-screen p-8 sm:p-20">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-center">
        Software engineer, learner, and amateur photographer.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-center">
        I'm Dheeresh, a software engineer and entrepreneur based in New York
        City. I'm the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <div className="mt-8 flex justify-center space-x-6">
        {socialLinks.map((social, index) => (
          <SocialIcon
            key={index}
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        ))}
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-center">
        Things I’ve made trying to put my dent in the universe.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-center">
        I’ve worked on tons of little projects over the years but these are the
        ones that I’m most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved.
      </p>

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <project.logo className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <HiOutlineExternalLink className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </div>
    </main>
  );
}
