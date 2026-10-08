import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zionopaaje.name.ng";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/news`, lastModified: new Date("2026-10-08"), changeFrequency: "weekly", priority: .9 },
    { url: `${base}/news/introducing-zion-opaaje`, lastModified: new Date("2026-10-08"), changeFrequency: "monthly", priority: .9 },
    { url: `${base}/socials`, lastModified: now, changeFrequency: "monthly", priority: .6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: .5 },
    { url: `${base}/now`, lastModified: now, changeFrequency: "weekly", priority: .7 }
  ];
}
