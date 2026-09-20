import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zionopaaje.name.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Zion Opaaje — Founder, Technology Builder & Creator", template: "%s — Zion Opaaje" },
  description: "The official portfolio and knowledge graph of Zion Opaaje, also known as MegaTron — founder, technology builder, and creator of The Tron Forge Limited and The MAX AI Ecosystem.",
  alternates: { canonical: siteUrl },
  openGraph: { title: "Zion Opaaje", description: "Founder, technology builder and creator building digital technologies for the future.", url: siteUrl, siteName: "Zion Opaaje", type: "website" },
  twitter: { card: "summary_large_image", title: "Zion Opaaje", description: "Founder, technology builder and creator." },
};

const person = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"Person",
      "@id":siteUrl+"/#person",
      "name":"Zion Opaaje",
      "alternateName":["MegaTron","MEGATRON300924"],
      "url":siteUrl,
      "nationality":{"@type":"Country","name":"Nigeria"},
      "jobTitle":["Founder","Technology Builder"],
      "knowsAbout":["Artificial Intelligence","Software Development","Technology","Digital Products","Entrepreneurship"],
      "founder":[{"@id":siteUrl+"/#tron-forge"},{"@id":siteUrl+"/#ttfl-store"}],
      "creator":{"@id":siteUrl+"/#max-ai"},
      "sameAs":["https://github.com/MEGATRON300924"]
    },
    {
      "@type":"Organization",
      "@id":siteUrl+"/#tron-forge",
      "name":"The Tron Forge Limited",
      "founder":{"@id":siteUrl+"/#person"},
      "foundingDate":"2024-08-01",
      "slogan":"...We Forge The Future...",
      "url":"https://thetronforge.name.ng"
    },
    {
      "@type":"SoftwareApplication",
      "@id":siteUrl+"/#max-ai",
      "name":"The MAX AI Ecosystem",
      "creator":{"@id":siteUrl+"/#person"},
      "publisher":{"@id":siteUrl+"/#tron-forge"},
      "url":"https://max-ai.name.ng",
      "applicationCategory":"Artificial Intelligence"
    },
    {
      "@type":"WebSite",
      "@id":siteUrl+"/#website",
      "name":"Zion Opaaje",
      "url":siteUrl,
      "about":{"@id":siteUrl+"/#person"}
    },
    {
      "@type":"WebPage",
      "@id":siteUrl+"/#webpage",
      "url":siteUrl,
      "name":"Zion Opaaje — Founder, Technology Builder & Creator",
      "isPartOf":{"@id":siteUrl+"/#website"},
      "about":{"@id":siteUrl+"/#person"}
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(person)}} /></body></html>;
}