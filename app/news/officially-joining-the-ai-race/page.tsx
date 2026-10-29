import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://zionopaaje.name.ng";
const articleUrl = `${siteUrl}/news/officially-joining-the-ai-race`;
const datePublished = "2026-10-29";
const headline = "Am Officially Joining The AI Race";
const description = "Zion Opaaje shares why he is stepping further into artificial intelligence with The MAX AI Ecosystem, the vision behind the project, and the work ahead.";

const youtubeUrl = "https://www.youtube.com/shorts/A60l1VsyEc4";
const youtubeThumbnail = "https://i.ytimg.com/vi/A60l1VsyEc4/maxresdefault.jpg";
const instagramUrl = "https://www.instagram.com/reel/DfFlL7WJ-D8/?psln=cGY0MjB0ZW1od2J6";
const instagramEmbedUrl = "https://www.instagram.com/reel/DfFlL7WJ-D8/embed";

export const metadata: Metadata = {
  title: headline,
  description,
  keywords: [
    "Zion Opaaje",
    "MegaTron",
    "joining the AI race",
    "artificial intelligence",
    "AI development",
    "MAX AI Ecosystem",
    "The Tron Forge Limited",
    "Nigerian technology founder"
  ],
  alternates: { canonical: articleUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "article",
    title: headline,
    description,
    url: articleUrl,
    siteName: "Zion Opaaje",
    locale: "en_NG",
    publishedTime: datePublished,
    modifiedTime: datePublished,
    authors: ["https://zionopaaje.name.ng/"],
    section: "Artificial Intelligence",
    tags: ["Artificial Intelligence", "MAX AI", "Zion Opaaje", "Technology"],
    images: [{ url: youtubeThumbnail, width: 1280, height: 720, alt: "Preview thumbnail for Zion Opaaje's video about joining the AI race" }]
  },
  twitter: {
    card: "summary_large_image",
    title: headline,
    description,
    images: [youtubeThumbnail]
  }
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      "@id": `${articleUrl}#article`,
      "url": articleUrl,
      "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
      "headline": headline,
      "description": description,
      "image": [youtubeThumbnail],
      "datePublished": datePublished,
      "dateModified": datePublished,
      "author": { "@type": "Person", "@id": `${siteUrl}/#person`, "name": "Zion Opaaje", "url": siteUrl },
      "publisher": { "@type": "Person", "@id": `${siteUrl}/#person`, "name": "Zion Opaaje", "url": siteUrl },
      "articleSection": "Artificial Intelligence",
      "inLanguage": "en-NG",
      "isPartOf": { "@type": "WebSite", "@id": `${siteUrl}/#website` },
      "keywords": ["Zion Opaaje", "MegaTron", "AI race", "artificial intelligence", "MAX AI Ecosystem", "The Tron Forge Limited"],
      "video": [
        { "@type": "VideoObject", "name": "Zion Opaaje — joining the AI race", "description": "A YouTube Short shared by Zion Opaaje.", "thumbnailUrl": [youtubeThumbnail], "contentUrl": youtubeUrl, "embedUrl": "https://www.youtube.com/embed/A60l1VsyEc4" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "News & Updates", "item": `${siteUrl}/news` },
        { "@type": "ListItem", "position": 3, "name": headline, "item": articleUrl }
      ]
    }
  ]
};

export default function JoiningTheAIRaceArticlePage() {
  return <><SiteNav /><main className="article-page">
    <article>
      <header className="article-hero">
        <div className="article-hero-copy">
          <div className="news-meta"><span>Artificial Intelligence · Personal Milestone</span><time dateTime={datePublished}>October 29, 2026</time></div>
          <h1>{headline}</h1>
          <p className="article-deck">I’m stepping more deliberately into one of the most important technology shifts of our time — not just to talk about AI, but to build, learn, test ideas and contribute something useful.</p>
          <div className="article-byline"><img src="https://www.max-ai.name.ng/zionopaaje.png" alt="Zion Opaaje" /><div><strong>By Zion Opaaje</strong><span>MegaTron · October 29, 2026</span></div></div>
        </div>
        <a className="article-cover ai-race-video-cover" href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="Watch the video on YouTube">
          <img src={youtubeThumbnail} alt="Video thumbnail for Am Officially Joining The AI Race" />
          <span className="ai-race-play" aria-hidden="true">▶</span>
          <span className="ai-race-cover-label">WATCH THE SHORT <span aria-hidden="true">↗</span></span>
        </a>
      </header>

      <div className="article-body">
        <p className="article-kicker">A NEW CHAPTER</p>
        <h2>More than following the AI conversation</h2>
        <p>Artificial intelligence is changing how people create, learn, work and interact with technology. I’ve been following that shift closely, and I’ve decided to make my place in it clearer: <strong>I’m officially joining the AI race.</strong></p>
        <p>For me, this is not about claiming to have all the answers or pretending that building useful AI is easy. It is a commitment to keep learning, take on the difficult engineering work, improve through feedback, and turn ideas into real products that people can use.</p>
        <p>I’m approaching this as a builder. That means experimenting, finding what works, being honest about what still needs improvement, and treating reliability, privacy and usefulness as important parts of the job — not as afterthoughts.</p>

        <div className="article-callout"><strong>The goal</strong><span>Build AI experiences that are useful beyond a single chat window — connected, personal, practical and designed around real needs.</span></div>

        <h2>Building with The MAX AI Ecosystem</h2>
        <p>A major part of this journey is <a href="https://max-ai.name.ng">The MAX AI Ecosystem</a>, the project I’m building to explore a more connected kind of AI assistant. The long-term direction is bigger than a question-and-answer bot: it is about bringing intelligent assistance into a growing set of digital experiences.</p>
        <p>That vision is still a work in progress. There are real challenges to solve — including dependable responses, infrastructure, integrations, user experience and making the system genuinely helpful. I want to document those challenges honestly, alongside the progress, rather than present unfinished ideas as completed products.</p>
        <p>Through <a href="https://thetronforge.name.ng">The Tron Forge Limited</a>, I’m working to turn these ideas into technology that can keep developing over time. The ambition is serious, but the approach has to stay grounded: build, test, learn and improve.</p>

        <h2>Watch the announcement</h2>
        <p>I’m sharing the journey publicly, starting with these videos. Open the YouTube Short below to watch it directly.</p>
        <a className="ai-race-media-card" href={youtubeUrl} target="_blank" rel="noreferrer">
          <span className="ai-race-media-thumb"><img src={youtubeThumbnail} alt="YouTube Short thumbnail" /><span className="ai-race-play" aria-hidden="true">▶</span></span>
          <span className="ai-race-media-copy"><strong>Am Officially Joining The AI Race</strong><span>YouTube Shorts · Watch video ↗</span></span>
        </a>

        <h2>Also on Instagram</h2>
        <p>The Instagram Reel is included here as a preview as well. If Instagram does not load the embedded post in your browser, use the link below to open it directly.</p>
        <div className="instagram-preview">
          <iframe
            src={instagramEmbedUrl}
            title="Instagram Reel by Zion Opaaje"
            loading="lazy"
            allowFullScreen
            allow="encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <p className="ai-race-instagram-link"><a href={instagramUrl} target="_blank" rel="noreferrer">View the Instagram Reel ↗</a></p>

        <h2>The work starts here</h2>
        <p>Joining the AI race is not a finish line or a claim that the journey will be easy. It is the beginning of a more deliberate chapter — one built around curiosity, consistent work, public learning and a commitment to keep improving.</p>
        <p>I’m excited to see what can be built, and I know the best way to prove the vision is through the quality of the work itself. I’ll keep sharing meaningful milestones as MAX AI and my broader technology projects evolve.</p>
        <p>Thank you to everyone who follows, gives feedback, tests the products or simply takes an interest in the journey. This is only the beginning.</p>
        <div className="article-footer-note"><strong>Zion Opaaje</strong><span>MegaTron · Founder of The Tron Forge Limited · Building The MAX AI Ecosystem</span></div>
      </div>
    </article>
    <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
  </main><SiteFooter /></>;
}
