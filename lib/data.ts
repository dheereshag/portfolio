/**
 * Centralized data/constants for the portfolio
 * All data is readonly for immutability and better performance
 */
import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from "react-icons/si";
import type { Role, Social, Project } from "@/lib/types";
import { EXTERNAL_URLS, ASSET_PATHS } from "@/lib/constants";

export const socials: readonly Social[] = [
  {
    href: EXTERNAL_URLS.GITHUB,
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: EXTERNAL_URLS.CODEFORCES,
    icon: SiCodeforces,
    label: "Codeforces",
  },
  {
    href: EXTERNAL_URLS.LEETCODE,
    icon: SiLeetcode,
    label: "LeetCode",
  },
  {
    href: EXTERNAL_URLS.LINKEDIN,
    icon: SiLinkedin,
    label: "LinkedIn",
  },
] as const;

export const projects: readonly Project[] = [
  {
    name: "Coloured Icons",
    description:
      "A CDN for coloured icons. It provides a simple way to use icons in your projects with customizable colors.",
    link: {
      href: EXTERNAL_URLS.COLOURED_ICONS,
      label: "coloured-icons.vercel.app",
    },
    logo: ASSET_PATHS.LOGOS.COLOURED_ICONS,
  },
  {
    name: "Portfolio",
    description:
      "This portfolio website, showcasing my work and projects. Built with Next.js, Tailwind CSS, and React Icons.",
    link: {
      href: EXTERNAL_URLS.PORTFOLIO,
      label: "dheereshagrwal.vercel.app",
    },
    logo: ASSET_PATHS.LOGOS.PORTFOLIO,
  },
  {
    name: "Vembric",
    description:
      "An API documentation template that helps you create beautiful and interactive API documentation on the web.",
    link: {
      href: EXTERNAL_URLS.VEMBRIC,
      label: "vembric.vercel.app",
    },
    logo: ASSET_PATHS.LOGOS.VEMBRIC,
  },
] as const;

export const resume: readonly Role[] = [
  {
    company: "TaxHoa",
    title: "Software Engineer",
    logo: ASSET_PATHS.LOGOS.TAXHOA,
    start: "Dec. 2022",
    end: "Present",
    website: EXTERNAL_URLS.TAXHOA,
  },
  {
    company: "RingCentral",
    title: "Software Engineer",
    logo: ASSET_PATHS.LOGOS.RINGCENTRAL,
    start: "Jul. 2022",
    end: "Nov. 2022",
    website: EXTERNAL_URLS.RINGCENTRAL,
  },
] as const;

// Content constants for better maintainability
export const CONTENT = {
  HERO: {
    TITLE: "Software engineer, learner, and an amateur photographer.",
    DESCRIPTION:
      "I'm Dheeresh, a software engineer based in India. I specialize in building scalable web applications and have experience working with companies like RingCentral and TaxHoa. I'm passionate about creating solutions that make a difference.",
  },
  PROJECTS: {
    TITLE: "Things I've made trying to put my dent in the universe.",
    DESCRIPTION:
      "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
  },
  ABOUT: {
    TITLE: "About Me",
    DESCRIPTIONS: [
      "I'm a software engineer with experience building scalable web applications. I've worked at companies like RingCentral and TaxHoa, where I've contributed to various software solutions and gained expertise in modern development practices.",
      "I enjoy working with JavaScript, TypeScript, and modern frameworks like React and Next.js. When I'm not coding, I like exploring new technologies and contributing to open-source projects.",
    ],
  },
} as const;
