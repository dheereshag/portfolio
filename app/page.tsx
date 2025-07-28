import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from "react-icons/si";
import SocialIcon from "../components/SocialIcon";

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
    </main>
  );
}
