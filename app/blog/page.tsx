import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = { title: "Blog", description: "The blog of Zion OPAAJE — coming soon." };

export default function Blog() {
  return (<><SiteNav /><main className="page"><section className="page-hero blog-hero"><p className="eyebrow">BLOG</p><h1>Thoughts, builds & stories.</h1><p className="lead">A place for things I write, build, learn and share. Coming soon.</p></section><section className="section blog-empty"><div className="blog-empty-card"><span>01</span><h2>Nothing here yet.</h2><p>New posts will appear here when I’m ready to publish them.</p></div></section></main><SiteFooter /></>);
}
