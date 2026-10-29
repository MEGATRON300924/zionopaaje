import type { Metadata } from "next";
import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://zionopaaje.name.ng";
const articleUrl = `${siteUrl}/news/officially-joining-the-ai-race`;
const datePublished = "2026-10-29";
const headline = "Am Officially Joining The AI Race";
const description = "I’m officially getting deeper into the AI race 🚀 Here’s why I’m building MAX AI, what I’m learning, and what I want to create next.";

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
          <p className="article-deck">So yeah, it’s official — I’m going all in on building AI. 🚀 This is me sharing the journey, the ideas, the wins, the mistakes and everything I learn along the way.</p>
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
        <p>If you know me, you already know I love technology and building things. AI is moving fast, and I don’t want to just sit back and watch everyone else build the future. I want to be part of it too — so I’m officially joining the AI race.</p>
        <p>I’m not saying I have everything figured out. Far from it 😅 There’s a lot to learn, plenty of things to fix, and some tough problems to solve. But that’s part of the fun. I want to keep experimenting, get better at the engineering side, listen to feedback and turn my ideas into things people can actually use.</p>
        <p>And I’ll be real about the journey: not everything will work first time. I’ll share the progress, the lessons and the parts that still need work. That’s how you grow.</p>

        <div className="article-callout"><strong>What I’m aiming for 🎯</strong><span>AI that’s actually helpful in everyday life — not just a chatbot that gives answers, but something more connected, personal and useful.</span></div>

        <h2>Building with The MAX AI Ecosystem</h2>
        <p>A big part of this is <a href="https://max-ai.name.ng">The MAX AI Ecosystem</a> — something I’ve been working on because I want to build an AI assistant that can do more than just answer a question and disappear. I’m thinking about how AI can fit into different parts of everyday life and work.</p>
        <p>MAX AI is still growing, and I’ve got plenty to improve. Reliability, speed, integrations and making the experience genuinely useful are all part of the challenge. I’m not going to pretend it’s all perfect already. I’d rather keep building, fix what doesn’t work and show the real progress.</p>
        <p>I’m also building through <a href="https://thetronforge.name.ng">The Tron Forge Limited</a>. There’s a lot I want to do, and I know it’ll take time — one step at a time.</p>

        <h2>Watch the announcement</h2>
        <p>I’ve started sharing this journey, and this is one of the videos. Tap the preview to watch it on YouTube.</p>
        <a className="ai-race-media-card" href={youtubeUrl} target="_blank" rel="noreferrer">
          <span className="ai-race-media-thumb"><img src={youtubeThumbnail} alt="YouTube Short thumbnail" /><span className="ai-race-play" aria-hidden="true">▶</span></span>
          <span className="ai-race-media-copy"><strong>Am Officially Joining The AI Race</strong><span>YouTube Shorts · Watch video ↗</span></span>
        </a>

        <h2>Also on Instagram</h2>
        <p>I’ve added the Reel here too. If the preview refuses to load (Instagram can be like that sometimes), the link underneath will take you straight to it.</p>
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
        <p>This isn’t me saying I’ve made it — it’s me saying I’m ready to put in the work. I’m excited about what AI can become, and I want to help build something that people will actually care about and find useful.</p>
        <p>If you’re following along, thank you ❤️ Keep an eye out for more updates as I build MAX AI and work on other ideas. And if you’ve got thoughts, feedback or just want to see what I’m working on, I’m all ears.</p>
        <p>This is the beginning. Let’s see where it goes. 🚀</p>
        <div className="article-footer-note"><strong>Zion Opaaje</strong><span>MegaTron · Building The MAX AI Ecosystem · Founder of The Tron Forge Limited</span></div>
      </div>
    </article>
    <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
  </main><SiteFooter /></>;
}
