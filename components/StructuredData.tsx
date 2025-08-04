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
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
      about: {
        "@type": "EducationalOccupationalProgram",
        name: "Materials Engineering",
        provider: {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Technology Bhubaneswar",
        },
      },
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Odisha",
      addressLocality: "Bhubaneswar",
    },
    nationality: {
      "@type": "Country",
      name: "India",
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
      // Add additional software application properties
      softwareVersion: "1.0",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
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

  // Add job posting schema for work experience
  const workExperienceSchema = resume.map((role, index) => ({
    "@context": "https://schema.org",
    "@type": "EmployeeRole",
    "@id": `${url}#job-${index}`,
    roleName: role.title,
    startDate: role.start,
    endDate:
      role.end === "Present"
        ? new Date().toISOString().split("T")[0]
        : role.end,
    worksFor: {
      "@type": "Organization",
      name: role.company,
      url: role.website,
    },
    employee: {
      "@type": "Person",
      name: CONTACT.NAME,
    },
  }));

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Dheeresh Agarwal specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dheeresh specializes in React, Next.js, TypeScript, Node.js, JavaScript, and full-stack web development. He has experience with modern frameworks and tools for building scalable web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Where has Dheeresh Agarwal worked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dheeresh has worked at multinational corporations like RingCentral and startups like TaxHoa, gaining experience across different company sizes and environments.",
        },
      },
      {
        "@type": "Question",
        name: "What education does Dheeresh Agarwal have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dheeresh is an alumnus of the Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar), one of India's premier technical institutions.",
        },
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
      {workExperienceSchema.map((schema, index) => (
        <script
          key={`work-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default memo(StructuredData);
