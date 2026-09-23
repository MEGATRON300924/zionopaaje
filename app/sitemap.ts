import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zionopaaje.name.ng";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/socials`, lastModified: now, changeFrequency: "monthly", priority: .6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: .5 }
  ];
}
