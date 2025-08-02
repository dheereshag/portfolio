import { memo } from "react";
import { CONTACT, EXTERNAL_URLS, ASSET_PATHS } from "@/lib/constants";
import { projects, resume, CONTENT } from "@/lib/data";

interface StructuredDataProps {
  readonly url?: string;
}

function StructuredData({
  url = EXTERNAL_URLS.PORTFOLIO,
}: StructuredDataProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: CONTACT.NAME,
    url: url,
    email: CONTACT.EMAIL,
    jobTitle: "Software Engineer",
    description: CONTENT.HERO.DESCRIPTION,
    image: `${url}${ASSET_PATHS.LOGOS.PORTFOLIO}`,
    sameAs: [
      EXTERNAL_URLS.GITHUB,
      EXTERNAL_URLS.LINKEDIN,
      EXTERNAL_URLS.LEETCODE,
      EXTERNAL_URLS.CODEFORCES,
    ],
    worksFor: resume.map((role) => ({
      "@type": "Organization",
      name: role.company,
      url: role.website,
    })),
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Backend Development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Bhubaneswar",
      url: "https://www.iitbbs.ac.in/",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${CONTACT.NAME} Portfolio`,
    description: CONTENT.HERO.DESCRIPTION,
    url: url,
    author: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
    publisher: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#portfolio`,
    name: "Software Engineering Portfolio",
    description: CONTENT.PROJECTS.DESCRIPTION,
    creator: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
    url: url,
    workExample: projects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.description,
      url: project.link.href,
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      author: {
        "@type": "Person",
        name: CONTACT.NAME,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: CONTACT.NAME,
    url: url,
    logo: `${url}${ASSET_PATHS.LOGOS.PORTFOLIO}`,
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT.EMAIL,
      contactType: "professional",
    },
    founder: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
    sameAs: [EXTERNAL_URLS.GITHUB, EXTERNAL_URLS.LINKEDIN],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${url}#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: `${url}#about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

export default memo(StructuredData);
