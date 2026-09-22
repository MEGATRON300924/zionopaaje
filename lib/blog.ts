import { list } from "@vercel/blob";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
};

const PREFIX = "blogs/posts/";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { blobs } = await list({ prefix: PREFIX, mode: "expanded" });
  const posts = await Promise.all(
    blobs.filter((blob) => blob.pathname.endsWith(".json")).map(async (blob) => {
      try {
        const response = await fetch(blob.url, { cache: "no-store" });
        return response.ok ? ((await response.json()) as BlogPost) : null;
      } catch {
        return null;
      }
    })
  );

  return posts.filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getBlogPost(slug: string) {
  return (await getBlogPosts()).find((post) => post.slug === slug) ?? null;
}

export function blogUrl(slug: string) {
  return `https://zionopaaje.name.ng/blog/${slug}`;
}

export function renderBlogContent(content: string) {
  return content.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean).map((block) => {
    const image = block.match(/^!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)$/);
    if (image) return { type: "image" as const, alt: image[1], src: image[2] };
    const video = block.match(/^@\[video\]\((https?:\/\/[^\s)]+)\)$/i);
    if (video) return { type: "video" as const, src: video[1] };
    if (block.startsWith("### ")) return { type: "h3" as const, text: block.slice(4) };
    if (block.startsWith("## ")) return { type: "h2" as const, text: block.slice(3) };
    if (block.startsWith("# ")) return { type: "h2" as const, text: block.slice(2) };

    const html = block
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
      .replace(/\n/g, "<br />");

    return { type: "paragraph" as const, html };
  });
}
