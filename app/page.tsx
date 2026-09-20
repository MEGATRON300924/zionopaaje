"use client";
import { useState } from "react";

const sections = ["About","Work","Knowledge","Experience","Education","Timeline","Gallery","Media","Profiles","Knowledge Graph","Contact"];

const projects = [
  {name:"The MAX AI Ecosystem",type:"AI ecosystem",status:"Building",desc:"An AI ecosystem by The Tron Forge Limited, with MAX AI at its core and a growing family of services.",href:"https://max-ai.name.ng"},
  {name:"TTFL Store",type:"Marketplace",status:"Building",desc:"A marketplace platform by The Tron Forge Limited with web, mobile and shared backend experiences.",href:"https://ttflstore.name.ng"},
  {name:"The Tron Forge Limited",type:"Technology company",status:"Founded 2024",desc:"A technology company focused on building digital technologies and products for the future.",href:"https://thetronforge.name.ng"}
];

const maxServices = ["MAX AI","MAX Home","MAX Voice","MAX Cloud","MAX Browser","MAX Connect","MAX Store","MAX Studio","MAX Security","MAX Pay","MAX OS"];
const skills = ["Artificial Intelligence","Software Development","Web Development","AI Assistants","AI Agents","Voice AI","JavaScript","TypeScript","Python","React","Next.js","Node.js","Express","PostgreSQL","Prisma","GitHub","Vercel","Render"];

const gallery = [
  {title:"MAX AI",cat:"MAX AI",text:"Product and interface moments"},
  {title:"The Tron Forge",cat:"The Tron Forge",text:"Company and building moments"},
  {title:"TTFL Store",cat:"TTFL Store",text:"Marketplace development"},
  {title:"Development",cat:"Development",text:"Code, prototypes and experiments"},
  {title:"Personal",cat:"Personal",text:"Personal and founder photography"},
  {title:"Projects",cat:"Projects",text:"Selected work and experiments"}
];

export default function Home(){
  const [active,setActive]=useState("All");
  const filtered=active==="All"?gallery:gallery.filter(x=>x.cat===active);
  const go=(id:string)=>document.getElementById(id.toLowerCase().replaceAll(" ","-"))?.scrollIntoView({behavior:"smooth"});
  return <main>
    <header className="nav"><a className="brand" href="#">ZION<span>OPAaje</span></a><nav>{sections.slice(0,7).map(s=><button key={s} onClick={()=>go(s)}>{s}</button>)}</nav><a className="nav-cta" href="#contact">Contact</a></header>

    <section className="hero" id="about">
      <div className="hero-copy">
        <p className="eyebrow">ZION OPA AJE · MEGATRON · TECHNOLOGY BUILDER</p>
        <h1>Building digital<br/><em>technologies for the future.</em></h1>
        <p className="lead">I’m Zion Opaaje, also known as MegaTron. I build software, AI products and digital ventures through The Tron Forge Limited.</p>
        <div className="actions"><a href="#work" className="primary">Explore my work ↗</a><a href="#knowledge-graph" className="secondary">Explore the graph</a></div>
        <div className="identity"><span>Founder</span><span>The Tron Forge Limited</span><span>Creator</span><span>The MAX AI Ecosystem</span></div>
      </div>
      <div className="orb-wrap"><div className="orb"><div className="orb-core"/></div><div className="orb-label">MEGATRON<br/><small>BUILDING THE FUTURE</small></div></div>
    </section>

    <section className="section" id="work"><div className="section-head"><p className="eyebrow">WORK</p><h2>Things I’m building.</h2><p>Projects, products and organizations connected to my work.</p></div><div className="cards">{projects.map(p=><article className="card" key={p.name}><div className="card-top"><span>{p.type}</span><b>{p.status}</b></div><h3>{p.name}</h3><p>{p.desc}</p><a href={p.href} target="_blank" rel="noreferrer">Visit project ↗</a></article>)}</div></section>

    <section className="section dark" id="knowledge"><div className="section-head"><p className="eyebrow">KNOWLEDGE</p><h2>Tools, technologies & ideas.</h2><p>Areas and technologies represented by my documented work.</p></div><div className="tags">{skills.map(x=><span key={x}>{x}</span>)}</div><div className="subsection"><h3>The MAX AI Ecosystem</h3><div className="tags muted">{maxServices.map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section className="section split" id="experience"><div><p className="eyebrow">EXPERIENCE</p><h2>Founder-led building.</h2></div><div className="timeline-list"><div><strong>Founder</strong><span>The Tron Forge Limited · 2024—present</span><p>Building a technology company and developing digital products.</p></div><div><strong>Creator / Founder</strong><span>The MAX AI Ecosystem · ongoing</span><p>Developing an AI ecosystem centered on MAX AI and connected services.</p></div><div><strong>Founder / Builder</strong><span>TTFL Store · 2025—present</span><p>Building a marketplace experience across web, mobile and backend systems.</p></div></div></section>

    <section className="section" id="education"><div className="section-head"><p className="eyebrow">EDUCATION</p><h2>Computer Science.</h2><p>Studying Computer Science at Miva Open University, alongside hands-on product development.</p></div></section>

    <section className="section dark" id="timeline"><div className="section-head"><p className="eyebrow">TIMELINE</p><h2>A growing story.</h2></div><div className="milestones"><div><b>2024</b><h3>The Tron Forge Limited</h3><p>Founded August 1, 2024.</p></div><div><b>2025</b><h3>TTFL Store</h3><p>Established September 1, 2025.</p></div><div><b>2026</b><h3>The MAX AI Ecosystem</h3><p>Expanding the MAX AI vision and product ecosystem.</p></div></div></section>

    <section className="section" id="gallery"><div className="section-head"><p className="eyebrow">GALLERY</p><h2>Life behind the builds.</h2><p>A visual archive for personal moments, products, development and milestones.</p></div><div className="filters">{["All",...gallery.map(x=>x.cat)].filter((x,i,a)=>a.indexOf(x)===i).map(x=><button className={active===x?"active":""} onClick={()=>setActive(x)} key={x}>{x}</button>)}</div><div className="gallery">{filtered.map((g,i)=><div className={"photo p"+i} key={g.title}><div className="photo-glow"/><div><span>{g.cat}</span><h3>{g.title}</h3><p>{g.text}</p></div></div>)}</div></section>

    <section className="section split" id="media"><div><p className="eyebrow">MEDIA & PUBLICATIONS</p><h2>Public work and references.</h2></div><div><p>This space is ready for articles, interviews, videos, announcements, talks, documentation and third-party coverage as they become available.</p><a className="text-link" href="#contact">Add a publication ↗</a></div></section>

    <section className="section dark" id="profiles"><div className="section-head"><p className="eyebrow">ONLINE PRESENCE</p><h2>Find Zion online.</h2></div><div className="profile-grid"><a href="https://github.com/MEGATRON300924" target="_blank" rel="noreferrer">GitHub <span>MEGATRON300924 ↗</span></a><a href="https://thetronforge.name.ng" target="_blank" rel="noreferrer">The Tron Forge <span>Company ↗</span></a><a href="https://max-ai.name.ng" target="_blank" rel="noreferrer">MAX AI <span>Ecosystem ↗</span></a><a href="https://ttflstore.name.ng" target="_blank" rel="noreferrer">TTFL Store <span>Marketplace ↗</span></a></div></section>

    <section className="section graph-section" id="knowledge-graph"><div className="section-head"><p className="eyebrow">KNOWLEDGE GRAPH</p><h2>One identity. Connected work.</h2><p>The site is designed around a structured entity graph so people and machines can understand how the person, organizations, products, projects, skills and profiles relate.</p></div><div className="graph"><div className="node center">Zion Opaaje<small>Person</small></div><div className="line l1"/><div className="line l2"/><div className="line l3"/><div className="node n1">The Tron Forge Limited<small>Organization</small></div><div className="node n2">The MAX AI Ecosystem<small>AI ecosystem</small></div><div className="node n3">TTFL Store<small>Marketplace</small></div></div></section>

    <section className="section contact" id="contact"><p className="eyebrow">CONTACT</p><h2>Let’s build what comes next.</h2><p>For collaborations, technology, products and business enquiries.</p><a className="primary" href="mailto:info@thetronforge.name.ng">Get in touch ↗</a></section>

    <footer><div><strong>ZION OPA AJE</strong><span>...We Forge The Future...</span></div><p>© 2026 Zion Opaaje. Built as a living public knowledge graph.</p><a href="#">Back to top ↑</a></footer>
  </main>
}