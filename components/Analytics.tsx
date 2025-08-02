import { memo } from "react";

interface AnalyticsProps {
  readonly gtag?: string;
  readonly umami?: {
    websiteId: string;
    src?: string;
  };
}

function Analytics({ gtag, umami }: AnalyticsProps) {
  return (
    <>
      {/* Google Analytics */}
      {gtag && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}

      {/* Umami Analytics */}
      {umami && (
        <script
          defer
          src={umami.src || "https://analytics.umami.is/script.js"}
          data-website-id={umami.websiteId}
        />
      )}
    </>
  );
}

export default memo(Analytics);

// Usage example (uncomment and add your analytics IDs when ready):
// import Analytics from "@/components/Analytics";
//
// // In your layout.tsx head section:
// <Analytics
//   gtag="G-XXXXXXXXXX" // Replace with your Google Analytics ID
//   umami={{
//     websiteId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Replace with your Umami website ID
//     src: "https://your-umami-instance.com/script.js" // Optional: custom Umami instance
//   }}
// />
