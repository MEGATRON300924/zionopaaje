const siteUrl = "https://zionopaaje.name.ng";
export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Zion Opaaje — News &amp; Updates</title>
    <link>${siteUrl}/news</link>
    <description>Official news and updates from Zion Opaaje.</description>
    <language>en-NG</language>
    <lastBuildDate>Mon, 19 Oct 2026 00:00:00 +0100</lastBuildDate>
    <item>
      <title>Am Officially Joining The AI Race</title>
      <link>${siteUrl}/news/officially-joining-the-ai-race</link>
      <guid isPermaLink="true">${siteUrl}/news/officially-joining-the-ai-race</guid>
      <pubDate>Thu, 29 Oct 2026 00:00:00 +0100</pubDate>
      <description>Zion Opaaje shares why he is stepping further into artificial intelligence with The MAX AI Ecosystem, the vision behind the project, and the work ahead.</description>
    </item>
    <item>
      <title>Introducing MAX AI for Businesses: A Connected AI Ecosystem for Hotels, Restaurants, and Modern Businesses</title>
      <link>${siteUrl}/news/max-ai-for-businesses</link>
      <guid isPermaLink="true">${siteUrl}/news/max-ai-for-businesses</guid>
      <pubDate>Mon, 19 Oct 2026 00:00:00 +0100</pubDate>
      <description>An overview of the MAX AI for Businesses initiative and its planned industry-focused solutions for hotels, restaurants and connected business workflows.</description>
    </item>
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
