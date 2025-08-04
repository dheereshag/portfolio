import { memo, useMemo } from "react";
import {
  EXTERNAL_URLS,
  createPersonSchema,
  createWebsiteSchema,
  createPortfolioSchema,
  createOrganizationSchema,
  createBreadcrumbSchema,
  createWorkExperienceSchemas,
  createFaqSchema,
} from "@/lib/constants";
import { projects, resume, CONTENT } from "@/lib/data";

interface StructuredDataProps {
  readonly url?: string;
}

function StructuredData({
  url = EXTERNAL_URLS.PORTFOLIO,
}: StructuredDataProps) {
  const personSchema = useMemo(
    () => createPersonSchema(url, resume, CONTENT),
    [url]
  );
  const websiteSchema = useMemo(() => createWebsiteSchema(url, CONTENT), [url]);
  const portfolioSchema = useMemo(
    () => createPortfolioSchema(url, projects, CONTENT),
    [url]
  );
  const organizationSchema = useMemo(
    () => createOrganizationSchema(url),
    [url]
  );
  const breadcrumbSchema = useMemo(() => createBreadcrumbSchema(url), [url]);
  const workExperienceSchema = useMemo(
    () => createWorkExperienceSchemas(url, resume),
    [url]
  );
  const faqSchema = useMemo(() => createFaqSchema(), []);

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
