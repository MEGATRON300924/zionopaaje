import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ImageCarousel from "@/components/ImageCarousel";

type UploadItem = {
  platform: "YouTube" | "GitHub";
  title: string;
  detail: string;
  date: string;
  href: string;
  thumbnail?: string;
};

type GitHubEvent = {
  type?: string;
  created_at?: string;
  repo?: { name?: string };
  payload?: {
    ref?: string;
    commits?: Array<{ message?: string }>;
    release?: { name?: string; tag_name?: string };
  };
};

function readXmlTag(source: string, tag: string) {
  const openingTag = `<${tag}`;
  const openingIndex = source.indexOf(openingTag);
  if (openingIndex < 0) return "";
  const contentStart = source.indexOf(">", openingIndex) + 1;
  const contentEnd = source.indexOf(`</${tag}>`, contentStart);
  if (contentStart === 0 || contentEnd < 0) return "";
  let value = source.slice(contentStart, contentEnd).trim();
  if (value.startsWith("<![CDATA[") && value.endsWith("]]>")) {
    value = value.slice(9, -3);
  }
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function getYouTubeUploads(): Promise<UploadItem[]> {
  try {
    const channelResponse = await fetch("https://www.youtube.com/@opaajezion", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ZionOpaajePortfolio/1.0)" },
      next: { revalidate: 3600 }
    });
    if (!channelResponse.ok) return [];
    const channelHtml = await channelResponse.text();
    const channelId =
      channelHtml.match(/"channelId"\s*:\s*"(UC[\w-]+)"/)?.[1] ??
      channelHtml.match(/itemprop="channelId" content="(UC[\w-]+)"/)?.[1];
    if (!channelId) return [];

    const feedResponse = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 1800 }
    });
    if (!feedResponse.ok) return [];
    const xml = await feedResponse.text();
    return xml.split("<entry>").slice(1).map((entryBlock) => {
      const entry = entryBlock.split("</entry>")[0];
      const videoId = readXmlTag(entry, "yt:videoId");
      const title = readXmlTag(entry, "title");
      const published = readXmlTag(entry, "published");
      if (!videoId || !title) return null;
      return {
        platform: "YouTube" as const,
        title,
        detail: "New video from @opaajezion",
        date: published,
        href: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
      };
    }).filter((item): item is UploadItem => item !== null).slice(0, 4);
  } catch {
    return [];
  }
}

async function getGitHubActivity(): Promise<UploadItem[]> {
  try {
    const response = await fetch("https://api.github.com/users/MEGATRON300924/events/public?per_page=30", {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "ZionOpaajePortfolio" },
      next: { revalidate: 1800 }
    });
    if (!response.ok) return [];
    const events = await response.json() as GitHubEvent[];
    return events.flatMap((event) => {
      const repo = event.repo?.name;
      if (!repo || !event.created_at) return [];
      let title = "";
      let detail = "";
      if (event.type === "PushEvent") {
        title = `Updated ${repo.split("/").pop()}`;
        detail = event.payload?.commits?.[0]?.message?.split("\n")[0] || "Pushed code updates";
      } else if (event.type === "ReleaseEvent") {
        title = `Released ${repo.split("/").pop()}`;
        detail = event.payload?.release?.name || event.payload?.release?.tag_name || "Published a release";
      } else if (event.type === "CreateEvent") {
        title = `Created in ${repo.split("/").pop()}`;
        detail = event.payload?.ref ? `Created ${event.payload.ref}` : "Created a repository resource";
      } else {
        return [];
      }
      return [{
        platform: "GitHub" as const,
        title,
        detail,
        date: event.created_at,
        href: `https://github.com/${repo}`
      }];
    }).slice(0, 4);
  } catch {
    return [];
  }
}

function formatUploadDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Recently" : date.toLocaleDateString("en-NG", {
    day: "numeric", month: "short", year: "numeric"
  });
}

async function LatestUploads() {
  const [youtube, github] = await Promise.all([getYouTubeUploads(), getGitHubActivity()]);
  const uploads = [...youtube, ...github]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
  const otherProfiles = [
    { name: "Instagram", href: "https://www.instagram.com/opaajezion" },
    { name: "TikTok", href: "https://www.tiktok.com/@MegaTron3000924" },
    { name: "X", href: "https://x.com/zionopaaje" },
    { name: "Threads", href: "https://www.threads.com/@opaajezion" },
    { name: "Snapchat", href: "https://www.snapchat.com/add/megatron300924?share_id=vaKssTsOxlc&locale=en-GB" }
  ];

  return <section className="section latest-uploads" aria-labelledby="latest-uploads-title">
    <div className="latest-uploads-heading">
      <div>
        <p className="eyebrow">FROM MY PUBLIC CHANNELS</p>
        <h2 id="latest-uploads-title">Latest uploads.</h2>
        <p>Recent videos and development activity, gathered from across my public platforms.</p>
      </div>
      <a className="latest-all-link" href="/socials">All social profiles <span aria-hidden="true">↗</span></a>
    </div>
    {uploads.length > 0 ? <div className="latest-upload-grid">
      {uploads.map((upload, index) => <a className="latest-upload-card" href={upload.href} target="_blank" rel="noopener noreferrer" key={`${upload.platform}-${upload.href}-${index}`}>
        {upload.thumbnail ? <div className="latest-upload-thumb"><img src={upload.thumbnail} alt="" loading="lazy"/><span className="latest-platform youtube">YouTube</span></div> : <div className="latest-upload-activity"><span className="latest-platform github">GitHub</span><span className="latest-activity-mark">↗</span></div>}
        <div className="latest-upload-copy">
          <strong>{upload.title}</strong>
          <span>{upload.detail}</span>
          <small>{formatUploadDate(upload.date)}</small>
        </div>
      </a>)}
    </div> : <p className="latest-empty">Recent uploads are temporarily unavailable. Visit the social profiles to see the latest posts.</p>}
    <div className="latest-social-links">
      <span>More channels</span>
      {otherProfiles.map((profile) => <a href={profile.href} target="_blank" rel="noopener noreferrer" key={profile.name}>{profile.name} ↗</a>)}
    </div>
  </section>;
}

export default async function Home(){
  return <><SiteNav/><main>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><img src="/tab_icon.jpg" alt="" aria-hidden="true"/>ZION OPAJE · MEGATRON · TECHNOLOGY BUILDER</p>
        <h1>Building digital<br/><em>technologies for the future.</em></h1>
        <p className="lead">I’m Zion Opaaje, also known as MegaTron. I build software, AI products and digital ventures through The Tron Forge Limited.</p>
        <div className="actions"><a href="/projects" className="primary">Explore my work <span aria-hidden="true">→</span></a><a href="/about" className="secondary">About me</a><a href="https://linktr.ee/opaajezion" className="linktree-button" target="_blank" rel="noopener noreferrer"><img src="/lintr.png" alt="" aria-hidden="true"/>Linktree <span aria-hidden="true">↗</span></a></div>
        <div className="identity"><span><img src="/ttfl.jpg" alt=""/>Founder · The Tron Forge Limited</span><span><img src="/maxai.png" alt=""/>Creator · The MAX AI Ecosystem</span><span><img src="/ttfl-store.png" alt=""/>Founder / Builder · TTFL Store</span></div>
      </div>
      <div className="hero-profile"><div className="portrait-frame"><img src="https://www.max-ai.name.ng/zionopaaje.png" alt="Zion Opaaje"/></div><div className="portrait-caption"><strong>Zion Opaaje</strong><span>MegaTron · MEGATRON300924</span></div></div>
    </section>
    <section className="section home-intro"><div className="section-head"><p className="eyebrow">A PUBLIC HOME</p><h2>More than a portfolio.</h2><p>This site is the public reference point for who I am, what I build, the projects connected to my work, my education, public profiles and the things that matter to me.</p></div><div className="home-links"><a href="/about"><b>About</b><span>Biography, education, interests and personal information →</span></a><a href="/projects"><b>Projects</b><span>MAX AI, TTFL Store and The Tron Forge Limited →</span></a><a href="/socials"><b>Socials</b><span>Find my official online profiles →</span></a><a href="/contact"><b>Contact</b><span>Business and collaboration enquiries →</span></a></div></section>
    <LatestUploads/>
    <ImageCarousel />
  </main><SiteFooter/></>;
}
