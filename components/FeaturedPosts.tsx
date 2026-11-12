"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds?: { process: () => void } };
  }
}

const youtubePosts = [
  {
    id: "83I40Fmb5h8",
    title: "Latest video",
    format: "YouTube video",
    url: "https://youtu.be/83I40Fmb5h8?si=EdDD7-awRIGzkRFB"
  },
  {
    id: "sg52Bm2h9LA",
    title: "Latest Short",
    format: "YouTube Short",
    url: "https://www.youtube.com/shorts/sg52Bm2h9LA",
    vertical: true
  }
];

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DbbXZezJ7dn/",
    label: "Instagram post"
  },
  {
    url: "https://www.instagram.com/reel/DfFlL7WJ-D8/",
    label: "Instagram Reel"
  }
];

function YouTubePreview({ post, index }: { post: typeof youtubePosts[number]; index: number }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const nextMuted = !muted;
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: nextMuted ? "mute" : "unMute", args: [] }),
      "*"
    );
    setMuted(nextMuted);
  }

  return (
    <article className={`featured-post-card featured-youtube-card${post.vertical ? " featured-youtube-vertical" : ""}`} style={{ animationDelay: `${index * 110}ms` }}>
      <div className="featured-video-frame">
        <iframe
          ref={frameRef}
          src={`https://www.youtube-nocookie.com/embed/${post.id}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0&enablejsapi=1`}
          title={post.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
        <button className="featured-sound-toggle" type="button" onClick={toggleSound} aria-label={muted ? "Turn video sound on" : "Mute video"}>
          <span aria-hidden="true">{muted ? "♪̸" : "♪"}</span>
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
      <div className="featured-post-meta">
        <span className="featured-platform-label youtube-label"><span aria-hidden="true">▶</span> {post.format}</span>
        <a className="featured-platform-link" href={post.url} target="_blank" rel="noopener noreferrer"><svg className="featured-platform-icon youtube-platform-icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.5 6.2-3.5-6.2-3.5v7Z"/></svg><span>Watch on YouTube</span></a>
      </div>
    </article>
  );
}

export default function FeaturedPosts() {
  useEffect(() => {
    const scriptUrls = [
      "https://www.instagram.com/embed.js",
      "https://www.snapchat.com/embed.js"
    ];

    for (const src of scriptUrls) {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (src.includes("instagram")) window.instgrm?.Embeds?.process();
        continue;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (src.includes("instagram")) {
        script.onload = () => window.instgrm?.Embeds?.process();
      }
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="section featured-posts" aria-labelledby="featured-posts-title">
      <div className="featured-posts-heading">
        <div>
          <p className="eyebrow">A FEW THINGS I'VE SHARED</p>
          <h2 id="featured-posts-title">Featured posts.</h2>
          <p>Videos, stories and moments from my social channels.</p>
        </div>
        <a className="featured-all-link" href="/socials">Explore all socials <span aria-hidden="true">↗</span></a>
      </div>

      <div className="featured-youtube-grid">
        {youtubePosts.map((post, index) => <YouTubePreview key={post.id} post={post} index={index} />)}
      </div>

      <div className="featured-embed-grid">
        {instagramPosts.map((post, index) => (
          <article className="featured-post-card featured-embed-card featured-instagram-card" key={post.url} style={{ animationDelay: `${(index + 2) * 110}ms` }}>
            <div className="featured-embed-label"><span className="featured-platform-label instagram-label">◎ Instagram</span><span>{post.label}</span></div>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post.url}
              data-instgrm-version="14"
              style={{ background: "#fff", border: 0, borderRadius: "12px", boxShadow: "none", margin: "0 auto", maxWidth: "540px", minWidth: "280px", padding: 0, width: "100%" }}
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
            </blockquote>
            <a className="featured-embed-fallback" href={post.url} target="_blank" rel="noopener noreferrer">Open on Instagram ↗</a>
          </article>
        ))}
        <article className="featured-post-card featured-embed-card featured-snapchat-card" style={{ animationDelay: "440ms" }}>
          <div className="featured-embed-label"><span className="featured-platform-label snapchat-label">👻 Snapchat</span><span>Story highlight</span></div>
          <blockquote
            className="snapchat-embed"
            data-snapchat-embed-width="416"
            data-snapchat-embed-height="692"
            data-snapchat-embed-url="https://www.snapchat.com/@megatron300924/highlight/a21226de-016b-5dae-a150-b9c536a29fa5/embed"
            data-snapchat-embed-style="border-radius: 24px;"
            data-snapchat-embed-title="megatron300924"
          />
          <a className="featured-embed-fallback" href="https://www.snapchat.com/@megatron300924/highlight/a21226de-016b-5dae-a150-b9c536a29fa5" target="_blank" rel="noopener noreferrer"><svg className="featured-platform-icon snapchat-platform-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect width="24" height="24" rx="6" fill="#FFFC00"/><path d="M12 4.2c-2.5 0-4.1 1.8-4.1 4.5 0 .8.1 1.6.1 2.2-.4.3-1 .5-1.6.5-.4 0-.7.2-.7.6 0 .5.8.8 1.4 1 .4.1.7.3.8.6.2.7-.8 1.7-2.2 2.2-.4.1-.5.5-.2.8.3.3 1 .3 1.4.3.5 0 .8.2 1 .7.1.3.4.5.8.4.8-.2 1.4-.3 2-.3.5 0 .9.2 1.3.6.4-.4.8-.6 1.3-.6.6 0 1.2.1 2 .3.4.1.7-.1.8-.4.2-.5.5-.7 1-.7.4 0 1.1 0 1.4-.3.3-.3.2-.7-.2-.8-1.4-.5-2.4-1.5-2.2-2.2.1-.3.4-.5.8-.6.6-.2 1.4-.5 1.4-1 0-.4-.3-.6-.7-.6-.6 0-1.2-.2-1.6-.5 0-.6.1-1.4.1-2.2 0-2.7-1.6-4.5-4.1-4.5Z" fill="#fff" stroke="#111" strokeWidth=".8" strokeLinejoin="round"/></svg><span>View more on Snapchat</span></a>
        </article>
      </div>
    </section>
  );
}
