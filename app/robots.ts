import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "CCBot", allow: "/" }
    ],
    sitemap: "https://zionopaaje.name.ng/sitemap.xml"
  };
}
