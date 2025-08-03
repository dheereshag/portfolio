/**
 * Application-wide constants for better maintainability and type safety
 */

// External URLs
export const EXTERNAL_URLS = {
  GITHUB: "https://github.com/dheereshagrwal",
  LINKEDIN: "https://linkedin.com/in/dheereshagrwal",
  LEETCODE: "https://leetcode.com/dheereshagrwal",
  CODEFORCES: "https://codeforces.com/profile/dheereshagrwal",
  PORTFOLIO: "https://dheereshagrwal.vercel.app",
  COLOURED_ICONS: "https://coloured-icons.vercel.app",
  VEMBRIC: "https://vembric.vercel.app",
  // Company URLs
  TAXHOA: "https://www.taxhoa.com",
  RINGCENTRAL: "https://www.ringcentral.com",
} as const;

// Contact information
export const CONTACT = {
  EMAIL: "da11@iitbbs.ac.in",
  NAME: "Dheeresh Agarwal",
} as const;

// Asset paths
export const ASSET_PATHS = {
  RESUME: "/Dheeresh_Agarwal_Resume.pdf",
  LOGOS: {
    TAXHOA: "/taxhoa.ico",
    RINGCENTRAL: "/ringcentral.png",
    PORTFOLIO: "/portfolio.png", // Large version for Open Graph
    PORTFOLIO_AVATAR: "/favicon-96x96.png", // Optimized small version for avatars
    COLOURED_ICONS: "/ci.svg",
    VEMBRIC: "/vembric.svg",
  },
} as const;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};