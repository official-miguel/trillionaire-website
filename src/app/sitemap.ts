import type { MetadataRoute } from "next";

const BASE_URL = "https://trillionairedesigns.co.ke";

// All public canonical routes with priority and change frequency
const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: Date;
}[] = [
  // Core pages
  { path: "/",                    changeFrequency: "weekly",  priority: 1.0 },
  { path: "/about",               changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact",             changeFrequency: "monthly", priority: 0.8 },
  { path: "/work",                changeFrequency: "monthly", priority: 0.8 },
  { path: "/work/bidii",          changeFrequency: "monthly", priority: 0.9 },
  // Service pages
  { path: "/web-development",     changeFrequency: "monthly", priority: 0.9 },
  { path: "/app-development",     changeFrequency: "monthly", priority: 0.9 },
  { path: "/systems",             changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai",                  changeFrequency: "monthly", priority: 0.9 },
  { path: "/training",            changeFrequency: "monthly", priority: 0.9 },
  // Blog index
  { path: "/blog",                changeFrequency: "weekly",  priority: 0.7 },
  // Blog articles
  {
    path: "/blog/how-to-choose-website-development-company-kenya",
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: new Date("2024-11-01"),
  },
  {
    path: "/blog/ai-automation-small-businesses-kenya",
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: new Date("2024-11-15"),
  },
  {
    path: "/blog/custom-software-vs-off-the-shelf-kenya",
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: new Date("2024-12-01"),
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: lastModified ?? now,
    changeFrequency,
    priority,
  }));
}
