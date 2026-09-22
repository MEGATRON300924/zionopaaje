import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Thoughts, builds, lessons and stories from Zion Opaaje."
};
export const dynamic = "force-dynamic";

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <>
      <SiteNav />
      <main className="page">
        <section className="page-hero blog-hero">
          <p className="eyebrow">BLOG</p>
          <h1>Thoughts, builds & stories.</h1>
          <p className="lead">What I’m building, learning, experimenting with and thinking about.</p>
        </section>
        <section className="section blog-index">
          {posts.length === 0 ? <div className="blog-empty-card"><span>01</span><h2>Nothing here yet.</h2><p>New posts will appear here when I’m ready to publish them.</p></div> : (
            <div className="blog-list">
              {posts.map((post) => (
                <a className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                  {post.coverImage && <img src={post.coverImage} alt="" />}
                  <div className="blog-card-copy">
                    <p className="eyebrow">{new Date(post.publishedAt).toLocaleDateString("en-NG", { dateStyle: "medium" })}</p>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span>Read article →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
