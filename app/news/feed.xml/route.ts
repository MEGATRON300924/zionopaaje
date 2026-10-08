const siteUrl = "https://zionopaaje.name.ng";
export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Zion Opaaje — News &amp; Updates</title>
    <link>${siteUrl}/news</link>
    <description>Official news and updates from Zion Opaaje.</description>
    <language>en-NG</language>
    <lastBuildDate>Thu, 08 Oct 2026 00:00:00 +0100</lastBuildDate>
    <item>
      <title>Introducing Zion Opaaje — Technology Builder, Founder &amp; Creator</title>
      <link>${siteUrl}/news/introducing-zion-opaaje</link>
      <guid isPermaLink="true">${siteUrl}/news/introducing-zion-opaaje</guid>
      <pubDate>Thu, 08 Oct 2026 00:00:00 +0100</pubDate>
      <description>An introduction to Zion Opaaje, his technology work, The Tron Forge Limited and The MAX AI Ecosystem.</description>
    </item>
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
