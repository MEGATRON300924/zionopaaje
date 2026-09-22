import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://zionopaaje.name.ng";
  const posts = await getBlogPosts();

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: .9 },
    { url: `${base}/socials`, lastModified: new Date(), changeFrequency: "monthly", priority: .6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: .5 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: .8
    }))
  ];
}
