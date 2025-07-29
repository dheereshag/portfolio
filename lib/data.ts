// Centralized data/constants for the portfolio
import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from "react-icons/si";
import type { Role, Social, Project } from "@/lib/types";

export const socials: Social[] = [
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

export const projects: Project[] = [
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

export const resume: Role[] = [
  {
    company: "TaxHoa",
    title: "Software Engineer",
    logo: "/taxhoa.ico",
    start: "Dec. 2022",
    end: "Present",
  },
  {
    company: "RingCentral",
    title: "Software Engineer",
    logo: "/ringcentral.png",
    start: "Jul. 2022",
    end: "Nov. 2022",
  },
];
