import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Official news and updates from Zion Opaaje covering technology, The Tron Forge Limited, MAX AI and new projects.",
  alternates: { canonical: "https://zionopaaje.name.ng/news", types: { "application/rss+xml": "/news/feed.xml" } },
  openGraph: {
    title: "News & Updates — Zion Opaaje",
    description: "Official news and updates from Zion Opaaje.",
    url: "https://zionopaaje.name.ng/news",
    type: "website",
    images: [{ url: "https://www.max-ai.name.ng/zionopaaje.png", width: 1200, height: 1200, alt: "Zion Opaaje" }]
  }
};

const posts = [
  {
    slug: "officially-joining-the-ai-race",
    title: "Am Officially Joining The AI Race",
    date: "October 29, 2026",
    isoDate: "2026-10-29",
    category: "Artificial Intelligence · Personal Milestone",
    excerpt: "Zion Opaaje shares why he is stepping further into artificial intelligence with The MAX AI Ecosystem, the vision behind the project, and the work ahead.",
    image: "https://i.ytimg.com/vi/A60l1VsyEc4/maxresdefault.jpg",
    imageAlt: "Video thumbnail for Am Officially Joining The AI Race"
  },
  {
    slug: "max-ai-for-businesses",
    title: "Introducing MAX AI for Businesses: A Connected AI Ecosystem for Hotels, Restaurants, and Modern Businesses",
    date: "October 19, 2026",
    isoDate: "2026-10-19",
    category: "MAX AI · Business Technology",
    excerpt: "An overview of the MAX AI for Businesses initiative and its planned industry-focused solutions for hotels, restaurants and connected business workflows.",
    image: "/maxai.png",
    imageAlt: "Official MAX AI Ecosystem logo"
  },
  {
    slug: "introducing-zion-opaaje",
    title: "Introducing Zion Opaaje — Technology Builder, Founder & Creator",
    date: "October 8, 2026",
    isoDate: "2026-10-08",
    category: "Introduction",
    excerpt: "An introduction to Zion Opaaje, his technology work, The Tron Forge Limited, The MAX AI Ecosystem and the purpose of this official portfolio.",
    image: "https://www.max-ai.name.ng/zionopaaje.png",
    imageAlt: "Zion Opaaje"
  }
];

export default function NewsPage() {
  return <><SiteNav/><main className="page news-page">
    <header className="page-hero news-hero">
      <p className="eyebrow">OFFICIAL NEWS · ZION OPAJE</p>
      <h1>News &<br/><em>updates.</em></h1>
      <p className="lead">A running record of projects, milestones, releases and ideas from my work in technology.</p>
    </header>
    <section className="section">
      <div className="news-list">
        {posts.map(post => <article className="news-card" key={post.slug}>
          <a className="news-image" href={`/news/${post.slug}`}>
            <img src={post.image} alt={post.imageAlt} />
          </a>
          <div className="news-card-copy">
            <div className="news-meta"><span>{post.category}</span><time dateTime={post.isoDate}>{post.date}</time></div>
            <h2><a href={`/news/${post.slug}`}>{post.title}</a></h2>
            <p>{post.excerpt}</p>
            <a className="text-link" href={`/news/${post.slug}`}>Read article <span aria-hidden="true">→</span></a>
          </div>
        </article>)}
      </div>
    </section>
  </main><SiteFooter/></>;
}
