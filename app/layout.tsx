import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zionopaaje.name.ng";
const profileImage = "https://www.max-ai.name.ng/zionopaaje.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Zion Opaaje — Founder, Technology Builder & Creator", template: "%s — Zion Opaaje" },
  description: "The official portfolio and public knowledge graph of Zion Opaaje, also known as MegaTron — founder, technology builder, and creator of The Tron Forge Limited and The MAX AI Ecosystem.",
  alternates: { canonical: siteUrl },
  openGraph: { title: "Zion Opaaje", description: "Founder, technology builder and creator building digital technologies for the future.", url: siteUrl, siteName: "Zion Opaaje", type: "website", images: [{url: profileImage, alt: "Zion Opaaje"}] },
  twitter: { card: "summary_large_image", title: "Zion Opaaje", description: "Founder, technology builder and creator.", images: [profileImage] },
};

const person = {
  "@type":"Person","@id":siteUrl+"/#person","name":"Zion Opaaje","alternateName":["MegaTron","MEGATRON300924"],"url":siteUrl,
  "image":{"@type":"ImageObject","@id":siteUrl+"/#profile-image","url":profileImage,"contentUrl":profileImage,"caption":"Zion Opaaje"},
  "nationality":{"@type":"Country","name":"Nigeria"},"jobTitle":["Founder","Technology Builder"],
  "knowsAbout":["Artificial Intelligence","Software Development","Technology","Digital Products","Entrepreneurship","AI Assistants","AI Agents","Voice AI"],
  "worksFor":{"@id":siteUrl+"/#tron-forge"},"creator":{"@id":siteUrl+"/#max-ai"},"affiliation":[{"@id":siteUrl+"/#tron-forge"},{"@id":siteUrl+"/#ttfl-store"}],
  "sameAs":["https://github.com/MEGATRON300924","https://commons.wikimedia.org/wiki/File:Zion_Opaaje%27s_Picture.jpg"]
};

const graph = {"@context":"https://schema.org","@graph":[
  person,
  {"@type":"Organization","@id":siteUrl+"/#tron-forge","name":"The Tron Forge Limited","url":"https://thetronforge.name.ng","founder":{"@id":siteUrl+"/#person"},"foundingDate":"2024-08-01","slogan":"...We Forge The Future..."},
  {"@type":"SoftwareApplication","@id":siteUrl+"/#max-ai","name":"The MAX AI Ecosystem","url":"https://max-ai.name.ng","creator":{"@id":siteUrl+"/#person"},"publisher":{"@id":siteUrl+"/#tron-forge"},"applicationCategory":"Artificial Intelligence"},
  {"@type":"Organization","@id":siteUrl+"/#ttfl-store","name":"TTFL Store","url":"https://ttflstore.name.ng","founder":{"@id":siteUrl+"/#person"},"parentOrganization":{"@id":siteUrl+"/#tron-forge"},"foundingDate":"2025-09-01"},
  {"@type":"WebSite","@id":siteUrl+"/#website","name":"Zion Opaaje","url":siteUrl,"about":{"@id":siteUrl+"/#person"},"publisher":{"@id":siteUrl+"/#person"}},
  {"@type":"WebPage","@id":siteUrl+"/#webpage","url":siteUrl,"name":"Zion Opaaje — Founder, Technology Builder & Creator","isPartOf":{"@id":siteUrl+"/#website"},"about":{"@id":siteUrl+"/#person"},"primaryImageOfPage":{"@id":siteUrl+"/#profile-image"}}
]};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(graph)}} /></body></html>;
}