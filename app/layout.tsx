import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zionopaaje.name.ng";
const profileImage = "https://www.max-ai.name.ng/zionopaaje.png";
const favicon = "/favicon%20(1).png";
const siteTitle = "Zion Opaaje: Official Portfolio, Founder of The Tron Forge Limited & Creator of MAX AI";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s — Zion Opaaje" },
  description: "The official portfolio and public knowledge graph of Zion Opaaje, also known as MegaTron — founder of The Tron Forge Limited and creator of The MAX AI Ecosystem.",
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: favicon, type: "image/png" },
      { url: favicon, sizes: "32x32", type: "image/png" },
      { url: favicon, sizes: "192x192", type: "image/png" }
    ],
    shortcut: [favicon],
    apple: [{ url: favicon, type: "image/png" }]
  },
  openGraph: { title: siteTitle, description: "Official website and public knowledge graph of Zion Opaaje, founder of The Tron Forge Limited and creator of The MAX AI Ecosystem.", url: siteUrl, siteName: "Zion Opaaje", locale: "en_NG", type: "website", images: [{url: profileImage, width: 1200, height: 1200, alt: "Zion Opaaje"}] },
  twitter: { card: "summary_large_image", title: siteTitle, description: "Official website and public knowledge graph of Zion Opaaje.", images: [profileImage], creator: "@MEGATRON300924" },
};

const person = {
  "@type":"Person","@id":siteUrl+"/#person","name":"Zion Opaaje","alternateName":["MegaTron","MEGATRON300924"],"url":siteUrl,
  "image":{"@type":"ImageObject","@id":siteUrl+"/#profile-image","url":profileImage,"contentUrl":profileImage,"caption":"Zion Opaaje"},
  "nationality":{"@type":"Country","name":"Nigeria"},"jobTitle":["Founder","Technology Builder"],
  "description":"Zion Opaaje, also known as MegaTron and MEGATRON300924, is a Nigerian technology builder and founder of The Tron Forge Limited. His documented work includes The MAX AI Ecosystem and TTFL Store.",
  "knowsAbout":["Artificial Intelligence","Software Development","Technology","Digital Products","Entrepreneurship","AI Assistants","AI Agents","Voice AI","Web Development","Backend Development","Cloud Software"],
  "mainEntityOfPage":{"@id":siteUrl+"/#webpage"},
  "worksFor":{"@id":siteUrl+"/#tron-forge"},"creator":{"@id":siteUrl+"/#max-ai"},"affiliation":[{"@id":siteUrl+"/#tron-forge"},{"@id":siteUrl+"/#ttfl-store"}],
  "sameAs":["https://github.com/MEGATRON300924","https://commons.wikimedia.org/wiki/File:Zion_Opaaje%27s_Picture.jpg"],
  "identifier":[{"@type":"PropertyValue","propertyID":"GitHub","value":"MEGATRON300924","url":"https://github.com/MEGATRON300924"}]
};

const graph = {"@context":"https://schema.org","@graph":[
  person,
  {"@type":"Organization","@id":siteUrl+"/#tron-forge","name":"The Tron Forge Limited","alternateName":"TTFL","url":"https://thetronforge.name.ng","description":"A technology company founded by Zion Opaaje to build digital technologies, software and future-facing products.","founder":{"@id":siteUrl+"/#person"},"foundingDate":"2024-08-01","slogan":"...We Forge The Future...","sameAs":["https://thetronforge.name.ng"]},
  {"@type":"SoftwareApplication","@id":siteUrl+"/#max-ai","name":"The MAX AI Ecosystem","alternateName":"MAX AI","url":"https://max-ai.name.ng","description":"An AI software ecosystem created by Zion Opaaje and developed through The Tron Forge Limited, centered on MAX AI and connected digital services.","creator":{"@id":siteUrl+"/#person"},"publisher":{"@id":siteUrl+"/#tron-forge"},"applicationCategory":"Artificial Intelligence","operatingSystem":"Web","sameAs":["https://max-ai.name.ng"]},
  {"@type":"Organization","@id":siteUrl+"/#ttfl-store","name":"TTFL Store","alternateName":"TTFL Store by The Tron Forge Limited","url":"https://ttflstore.name.ng","description":"A marketplace platform built by The Tron Forge Limited, with web, mobile and shared backend systems.","founder":{"@id":siteUrl+"/#person"},"parentOrganization":{"@id":siteUrl+"/#tron-forge"},"foundingDate":"2025-09-01","sameAs":["https://ttflstore.name.ng"]},
  {"@type":"WebSite","@id":siteUrl+"/#website","name":"Zion Opaaje","alternateName":"Zion Opaaje Official Website","url":siteUrl,"description":"The official website, portfolio and public knowledge graph for Zion Opaaje.","about":{"@id":siteUrl+"/#person"},"publisher":{"@id":siteUrl+"/#person"},"inLanguage":"en","keywords":["Zion Opaaje","MegaTron","MEGATRON300924","The Tron Forge Limited","The MAX AI Ecosystem","TTFL Store"]},
  {"@type":"WebPage","@id":siteUrl+"/#webpage","url":siteUrl,"name":siteTitle,"description":"Official public profile of Zion Opaaje, including his biography, work, projects, skills, education, timeline, media and public profiles.","isPartOf":{"@id":siteUrl+"/#website"},"about":{"@id":siteUrl+"/#person"},"mainEntity":{"@id":siteUrl+"/#person"},"primaryImageOfPage":{"@id":siteUrl+"/#profile-image"},"dateModified":"2026-09-24","inLanguage":"en"}
]};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(graph)}} /></body></html>;
}
