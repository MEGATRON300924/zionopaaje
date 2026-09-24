import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Socials",
  description: "Official social and online profiles for Zion Opaaje."
};

type Profile = {
  name: string;
  detail: string;
  href: string;
  icon?: string;
};

const profiles: Profile[] = [
  { name: "Instagram", detail: "@opaajezion", href: "https://www.instagram.com/opaajezion", icon: "/icons8-instagram-96.gif" },
  { name: "TikTok", detail: "@MegaTron3000924", href: "https://www.tiktok.com/@MegaTron3000924", icon: "/icons8-tiktok-96.gif" },
  { name: "GitHub", detail: "MEGATRON300924", href: "https://github.com/MEGATRON300924" },
  { name: "X", detail: "@zionopaaje", href: "https://x.com/zionopaaje", icon: "/icons8-x-96.png" },
  { name: "YouTube", detail: "@opaajezion", href: "https://youtube.com/@opaajezion", icon: "/icons8-youtube-96.png" },
  { name: "The Tron Forge Limited", detail: "Company website", href: "https://thetronforge.name.ng", icon: "https://max-ai.name.ng/ttfl.png" },
  { name: "The MAX AI Ecosystem", detail: "Ecosystem website", href: "https://max-ai.name.ng", icon: "https://max-ai.name.ng/favicon.png" },
  { name: "TTFL Store", detail: "Marketplace website", href: "https://ttflstore.name.ng", icon: "/ttflstore.png" },
  { name: "Wikimedia Commons", detail: "Profile image", href: "https://commons.wikimedia.org/wiki/File:Zion_Opaaje%27s_Picture.jpg" }
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
            {profiles.map((profile) => (
              <a href={profile.href} target="_blank" rel="noreferrer" key={profile.name}>
                <span className="profile-icon" aria-hidden="true">
                  {profile.icon ? (
                    <img src={profile.icon} alt="" />
                  ) : (
                    <span className="profile-icon-fallback">{profile.name.charAt(0)}</span>
                  )}
                </span>
                <span className="profile-copy">
                  <strong>{profile.name}</strong>
                  <span>{profile.detail} →</span>
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
