import { list, put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import type { BlogPost } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET() {
  const { blobs } = await list({ prefix: "blogs/posts/", mode: "expanded" });
  const posts = await Promise.all(blobs.filter((blob) => blob.pathname.endsWith(".json")).map(async (blob) => {
    const response = await fetch(blob.url, { cache: "no-store" });
    return response.ok ? ((await response.json()) as BlogPost) : null;
  }));
  return NextResponse.json(posts.filter((post): post is BlogPost => Boolean(post)));
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = (await request.json()) as Partial<BlogPost>;
  const title = body.title?.trim();
  const slug = body.slug?.trim().toLowerCase();
  const content = body.content?.trim();

  if (!title || !slug || !content) return NextResponse.json({ error: "Title, slug and content are required." }, { status: 400 });
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return NextResponse.json({ error: "Slug must use lowercase letters, numbers and hyphens." }, { status: 400 });

  const now = new Date().toISOString();
  const post: BlogPost = {
    slug,
    title,
    excerpt: body.excerpt?.trim() || title,
    content,
    coverImage: body.coverImage?.trim() || undefined,
    tags: Array.isArray(body.tags) ? body.tags.filter(Boolean).slice(0, 12) : [],
    publishedAt: body.publishedAt || now,
    updatedAt: now,
    author: "Zion Opaaje"
  };

  const blob = await put(`blogs/posts/${slug}.json`, JSON.stringify(post), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60
  });

  return NextResponse.json({ post, url: blob.url });
}
