import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BlogShare from "@/components/BlogShare";
import { blogUrl, getBlogPost, renderBlogContent } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Blog post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: blogUrl(post.slug) },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: blogUrl(post.slug),
      siteName: "Zion Opaaje",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Zion Opaaje"],
      tags: post.tags,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined
    },
    twitter: {
      card: post.coverImage ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const blocks = renderBlogContent(post.content);
  const url = blogUrl(post.slug);

  return (
    <>
      <SiteNav />
      <main className="blog-post-page">
        <article className="blog-post">
          <header className="blog-post-header">
            <p className="eyebrow">BLOG · {new Date(post.publishedAt).toLocaleDateString("en-NG", { dateStyle: "long" })}</p>
            <h1>{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <div className="blog-post-meta"><span>By Zion Opaaje</span>{post.tags.length > 0 && <span>{post.tags.join(" · ")}</span>}</div>
            {post.coverImage && <img className="blog-cover" src={post.coverImage} alt={post.title} />}
          </header>

          <div className="blog-content">
            {blocks.map((block, index) => {
              if (block.type === "image") return <figure key={index}><img src={block.src} alt={block.alt} /><figcaption>{block.alt}</figcaption></figure>;
              if (block.type === "video") return <video key={index} controls preload="metadata" src={block.src} />;
              if (block.type === "h2" || block.type === "h3") return <h2 key={index}>{block.text}</h2>;
              return <p key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;
            })}
          </div>

          <BlogShare url={url} title={post.title} />

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage ? [post.coverImage] : undefined,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: { "@type": "Person", name: "Zion Opaaje", url: "https://zionopaaje.name.ng" },
            publisher: { "@type": "Person", name: "Zion Opaaje", url: "https://zionopaaje.name.ng" },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: post.tags.join(", ")
          }) }} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
