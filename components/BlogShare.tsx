"use client";

import { useState } from "react";

export default function BlogShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function share() {
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await copy();
  }

  return (
    <div className="blog-share">
      <strong>Share this post</strong>
      <div>
        <button type="button" onClick={share}>Share</button>
        <button type="button" onClick={copy}>{copied ? "Copied" : "Copy link"}</button>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer">X</a>
      </div>
    </div>
  );
}
