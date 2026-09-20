import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zion Opaaje — Official Website",
    short_name: "Zion Opaaje",
    description: "The official website, portfolio and public knowledge graph of Zion Opaaje.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#111111",
    icons: [
      {
        src: "/favicon.png",
        type: "image/png",
        sizes: "any",
        purpose: "any"
      }
    ]
  };
}
