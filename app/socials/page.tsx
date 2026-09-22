import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Socials",
  description: "Official social and online profiles for Zion Opaaje."
};

const profiles = [
  ["Instagram", "@opaajezion", "https://www.instagram.com/opaajezion", "/icons8-instagram-96.gif"],
  ["TikTok", "@MegaTron3000924", "https://www.tiktok.com/@MegaTron3000924", "/icons8-tiktok-96.gif"],
  ["GitHub", "MEGATRON300924", "https://github.com/MEGATRON300924", null],
  ["X", "@zionopaaje", "https://x.com/zionopaaje", "/icons8-x-96.png"],
  ["YouTube", "@opaajezion", "https://youtube.com/@opaajezion", "/icons8-youtube-96.png"],
  ["The Tron Forge Limited", "Company website", "https://thetronforge.name.ng", null],
  ["The MAX AI Ecosystem", "Ecosystem website", "https://max-ai.name.ng", null],
  ["TTFL Store", "Marketplace website", "https://ttflstore.name.ng", null],
  ["Wikimedia Commons", "Profile image", "https://commons.wikimedia.org/wiki/File:Zion_Opaaje%27s_Picture.jpg", null]
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
            {profiles.map(([name, detail, href, icon]) => (
              <a href={href} target="_blank" rel="noreferrer" key={name}>
                <span className="profile-icon" aria-hidden="true">
                  {icon ? <img src={icon} alt="" /> : <span className="profile-icon-fallback">{name.charAt(0)}</span>}
                </span>
                <span className="profile-copy">
                  <strong>{name}</strong>
                  <span>{detail} →</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
