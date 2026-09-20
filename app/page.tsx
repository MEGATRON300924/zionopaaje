import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Home(){
  return <><SiteNav/><main>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">ZION OPAJE · MEGATRON · TECHNOLOGY BUILDER</p>
        <h1>Building digital<br/><em>technologies for the future.</em></h1>
        <p className="lead">I’m Zion Opaaje, also known as MegaTron. I build software, AI products and digital ventures through The Tron Forge Limited.</p>
        <div className="actions"><a href="/projects" className="primary">Explore my work <span aria-hidden="true">→</span></a><a href="/about" className="secondary">About me</a></div>
        <div className="identity"><span>Founder · The Tron Forge Limited</span><span>Creator · The MAX AI Ecosystem</span><span>Founder / Builder · TTFL Store</span></div>
      </div>
      <div className="hero-profile"><div className="portrait-frame"><img src="https://www.max-ai.name.ng/zionopaaje.png" alt="Zion Opaaje"/></div><div className="portrait-caption"><strong>Zion Opaaje</strong><span>MegaTron · MEGATRON300924</span></div></div>
    </section>
    <section className="section home-intro"><div className="section-head"><p className="eyebrow">A PUBLIC HOME</p><h2>More than a portfolio.</h2><p>This site is the public reference point for who I am, what I build, the projects connected to my work, my education, public profiles and the things that matter to me.</p></div><div className="home-links"><a href="/about"><b>About</b><span>Biography, education, interests and personal information →</span></a><a href="/projects"><b>Projects</b><span>MAX AI, TTFL Store and The Tron Forge Limited →</span></a><a href="/religion"><b>Religion</b><span>My personal faith and religious information →</span></a><a href="/socials"><b>Socials</b><span>Find my official online profiles →</span></a><a href="/contact"><b>Contact</b><span>Business and collaboration enquiries →</span></a></div></section>
  </main><SiteFooter/></>;
}