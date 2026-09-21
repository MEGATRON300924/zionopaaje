import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Socials",
  description: "Official social and online profiles for Zion Opaaje."
};

const profiles = [
  ["Instagram", "@opaajezion", "https://www.instagram.com/opaajezion"],
  ["TikTok", "@MegaTron3000924", "https://www.tiktok.com/@MegaTron3000924"],
  ["GitHub", "MEGATRON300924", "https://github.com/MEGATRON300924"],
  ["X", "@TheTronForgeLTD", "https://x.com/TheTronForgeLTD"],
  ["YouTube", "@opaajezion", "https://youtube.com/@opaajezion"],
  ["The Tron Forge Limited", "Company website", "https://thetronforge.name.ng"],
  ["The MAX AI Ecosystem", "Ecosystem website", "https://max-ai.name.ng"],
  ["TTFL Store", "Marketplace website", "https://ttflstore.name.ng"],
  ["Wikimedia Commons", "Profile image", "https://commons.wikimedia.org/wiki/File:Zion_Opaaje%27s_Picture.jpg"]
];

export default function Socials() {
  return (
    <>
      <SiteNav />
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">SOCIALS & PROFILES</p>
          <h1>Find me online.</h1>
          <p className="lead">
            Official public profiles, projects and websites connected to Zion Opaaje.
          </p>
        </section>

        <section className="section">
          <div className="profile-grid">
            {profiles.map(([name, detail, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={name}>
                <strong>{name}</strong>
                <span>{detail} →</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}