import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://zionopaaje.name.ng";
  const paths=["","/about","/projects","/socials","/contact"];
  return paths.map(path=>({url:base+path,lastModified:new Date()}));
}
