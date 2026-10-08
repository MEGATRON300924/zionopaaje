import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://zionopaaje.name.ng";
const articleUrl = `${siteUrl}/news/introducing-zion-opaaje`;
const profileImage = "https://www.max-ai.name.ng/zionopaaje.png";
const ttflLogo = `${siteUrl}/ttfl.jpg`;
const maxLogo = `${siteUrl}/maxai.png`;
const datePublished = "2026-10-08";

export const metadata: Metadata = {
  title: "Introducing Zion Opaaje — Technology Builder, Founder & Creator",
  description: "An introduction to Zion Opaaje, also known as MegaTron, his technology work, The Tron Forge Limited and The MAX AI Ecosystem.",
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    title: "Introducing Zion Opaaje — Technology Builder, Founder & Creator",
    description: "An introduction to Zion Opaaje and the technology he is building.",
    url: articleUrl,
    publishedTime: datePublished,
    authors: ["Zion Opaaje"],
    section: "Introduction",
    images: [{ url: profileImage, width: 1200, height: 1200, alt: "Zion Opaaje" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Introducing Zion Opaaje — Technology Builder, Founder & Creator",
    description: "An introduction to Zion Opaaje and the technology he is building.",
    images: [profileImage]
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": `${articleUrl}#article`,
  "url": articleUrl,
  "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
  "headline": "Introducing Zion Opaaje — Technology Builder, Founder & Creator",
  "description": "An introduction to Zion Opaaje, also known as MegaTron, his technology work, The Tron Forge Limited and The MAX AI Ecosystem.",
  "image": [profileImage],
  "datePublished": datePublished,
  "dateModified": datePublished,
  "author": { "@type": "Person", "@id": `${siteUrl}/#person`, "name": "Zion Opaaje", "url": siteUrl },
  "publisher": {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    "name": "Zion Opaaje",
    "url": siteUrl,
    "image": { "@type": "ImageObject", "url": profileImage }
  },
  "articleSection": "Introduction",
  "inLanguage": "en-NG",
  "isPartOf": { "@type": "WebSite", "@id": `${siteUrl}/#website` },
  "about": [
    { "@type": "Person", "@id": `${siteUrl}/#person` },
    { "@type": "Organization", "@id": `${siteUrl}/#tron-forge` },
    { "@type": "SoftwareApplication", "@id": `${siteUrl}/#max-ai` }
  ],
  "keywords": ["Zion Opaaje", "MegaTron", "The Tron Forge Limited", "MAX AI", "technology", "software development", "artificial intelligence"]
};

export default function ArticlePage() {
  return <><SiteNav/><main className="article-page">
    <article>
      <header className="article-hero">
        <div className="article-hero-copy">
          <div className="news-meta"><span>Introduction</span><time dateTime={datePublished}>October 8, 2026</time></div>
          <h1>Introducing Zion Opaaje — Technology Builder, Founder & Creator</h1>
          <p className="article-deck">A first look at the person behind the work, the companies and the technology projects documented on this official portfolio.</p>
          <div className="article-byline"><img src={profileImage} alt="Zion Opaaje"/><div><strong>Zion Opaaje</strong><span>Published October 8, 2026</span></div></div>
        </div>
        <figure className="article-cover"><img src={profileImage} alt="Official portrait of Zion Opaaje"/></figure>
      </header>

      <div className="article-body">
        <p className="article-kicker">WELCOME</p>
        <h2>A public home for the work</h2>
        <p>This is the first official update published on my portfolio. I’m Zion Opaaje, also known as MegaTron and MEGATRON300924, a Nigerian technology builder focused on creating software, artificial intelligence products and digital experiences.</p>
        <p>This website is more than a traditional portfolio. It is a public reference point for my work, projects, education, interests and the technology I am building. The News section will document meaningful milestones as that work develops.</p>

        <div className="article-callout"><strong>What you can expect here</strong><span>Project announcements, product milestones, technical work, launches and other significant updates.</span></div>

        <div className="article-entity">
          <img src={ttflLogo} alt="The Tron Forge Limited official logo"/>
          <div><p className="article-kicker">THE TRON FORGE LIMITED</p><h2>Building through TTFL</h2></div>
        </div>
        <p>I am the founder of <a href="https://thetronforge.name.ng">The Tron Forge Limited</a> (TTFL), a technology company founded to build digital technologies, software and future-facing products. TTFL is the organization behind several of the projects documented across this portfolio.</p>
        <p>The goal is simple: keep building useful technology and keep improving the ideas that can become real products. The company’s guiding phrase is <em>“...We Forge The Future...”</em>.</p>

        <div className="article-entity">
          <img src={maxLogo} alt="The MAX AI Ecosystem official logo"/>
          <div><p className="article-kicker">THE MAX AI ECOSYSTEM</p><h2>Creating MAX AI</h2></div>
        </div>
        <p>One of the central projects in that work is <a href="https://max-ai.name.ng">The MAX AI Ecosystem</a>, an AI software ecosystem centered on MAX AI and connected digital services. The project explores voice-first interaction, AI assistance and a broader ecosystem of software experiences.</p>
        <p>MAX AI is part of a larger long-term effort to make advanced technology feel more useful, accessible and connected in everyday digital environments.</p>

        <h2>What comes next</h2>
        <p>This introduction marks the beginning of the News section rather than a finished chapter. Future posts will focus on real developments: new products, releases, major updates, experiments, milestones and other work worth documenting.</p>
        <p>If you are discovering me through search or a knowledge panel, welcome. This site is the place where I will continue to document the work and the technologies being built.</p>

        <div className="article-footer-note"><strong>Zion Opaaje</strong><span>MegaTron · Technology Builder · Founder of The Tron Forge Limited · Creator of The MAX AI Ecosystem</span></div>
      </div>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
  </main><SiteFooter/></>;
}
