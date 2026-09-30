import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata={title:"Now",description:"What Zion Opaaje is building and learning now."};

export default function Now(){
  return <><SiteNav/><main className="page now-page">
    <section className="page-hero"><p className="eyebrow">NOW</p><h1>What I’m building now.</h1><p className="lead">A current snapshot of the work, learning and ideas taking shape around Zion Opaaje.</p></section>
    <section className="section"><div className="now-grid">
      <article className="now-feature"><img src="/maxai.png" alt="The MAX AI Ecosystem logo"/><div><p className="eyebrow">AI ECOSYSTEM</p><h2>The MAX AI Ecosystem</h2><p>Continuing to develop MAX AI and its wider family of connected digital services, experiences and infrastructure.</p><a className="text-link" href="https://max-ai.name.ng" target="_blank" rel="noreferrer">Explore MAX AI →</a></div></article>
      <article className="now-feature"><img src="/ttfl-store.png" alt="TTFL Store logo"/><div><p className="eyebrow">MARKETPLACE</p><h2>TTFL Store</h2><p>Building the web, mobile and backend systems behind the marketplace while improving the experience for vendors and customers.</p><a className="text-link" href="https://ttflstore.name.ng" target="_blank" rel="noreferrer">Explore TTFL Store →</a></div></article>
      <article className="now-feature"><img src="/ttfl.jpg" alt="The Tron Forge Limited logo"/><div><p className="eyebrow">TECHNOLOGY COMPANY</p><h2>The Tron Forge Limited</h2><p>Growing the company around practical software, AI and digital products.</p><a className="text-link" href="https://thetronforge.name.ng" target="_blank" rel="noreferrer">Visit The Tron Forge →</a></div></article>
    </div></section>
    <section className="section dark split"><div><p className="eyebrow">THE WORK BEHIND THE NAME</p><h2>One direction. Several builds.</h2></div><div className="entity-map"><div className="entity-main"><img src="https://www.max-ai.name.ng/zionopaaje.png" alt="Zion Opaaje"/><strong>Zion Opaaje</strong><span>Founder · Technology Builder</span></div><div className="entity-line"/><div className="entity-children">
      <a href="https://thetronforge.name.ng" target="_blank" rel="noreferrer"><img src="/ttfl.jpg" alt="The Tron Forge Limited"/><strong>The Tron Forge Limited</strong><span>Technology company</span></a>
      <a href="https://max-ai.name.ng" target="_blank" rel="noreferrer"><img src="/maxai.png" alt="The MAX AI Ecosystem"/><strong>The MAX AI Ecosystem</strong><span>AI ecosystem</span></a>
      <a href="https://ttflstore.name.ng" target="_blank" rel="noreferrer"><img src="/ttfl-store.png" alt="TTFL Store"/><strong>TTFL Store</strong><span>Marketplace platform</span></a>
    </div></div></section>
    <section className="section split"><div><p className="eyebrow">CURRENT LEARNING</p><h2>Learning Computer Science.</h2></div><div><p>I’m studying Computer Science at Miva Open University while continuing to learn through practical software and AI projects.</p><div className="now-facts"><span>JavaScript · TypeScript · Python</span><span>React · Next.js · Node.js</span><span>PostgreSQL · Prisma · APIs</span><span>AI applications · Voice AI · Agents</span></div></div></section>
    <section className="section dark"><div className="section-heading"><p className="eyebrow">TIMELINE</p><h2>How the work has grown.</h2></div><div className="now-timeline"><div><strong>2024</strong><span>The Tron Forge Limited founded</span></div><div><strong>2025</strong><span>TTFL Store established</span></div><div><strong>2026</strong><span>MAX AI ecosystem expansion</span></div><div><strong>NOW</strong><span>Learning, building and iterating</span></div></div></section>
  </main><SiteFooter/></>;
}