"use client";

import { useState } from "react";

function Icon({name}:{name:"menu"|"close"|"arrow"|"github"|"mail"}) {
  const common={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,ariaHidden:true};
  if(name==="menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
  if(name==="close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>;
  if(name==="mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  if(name==="github") return <svg {...common}><path d="M15 22v-3.5c0-1-.4-1.7-1.1-2.1 3.7-.4 6.1-2 6.1-5.8 0-1.3-.5-2.5-1.4-3.4.1-.4.6-2-.1-3.4 0 0-1.1-.4-3.5 1.3a12.2 12.2 0 0 0-6.4 0C6.2 3.4 5.1 3.8 5.1 3.8c-.7 1.4-.2 3-.1 3.4A4.8 4.8 0 0 0 3.6 10c0 3.8 2.4 5.4 6.1 5.8-.7.4-1.1 1.1-1.1 2.1V22"/></svg>;
  return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
}

const links=[
  ["/about","About"],
  ["/projects","Projects"],
  ["/blog","Blog"],
  ["/socials","Socials"],
  ["/contact","Contact"]
];

export default function SiteNav(){
  const [open,setOpen]=useState(false);
  return <header className="nav">
    <a className="brand" href="/">ZION<span>OPAAJE</span></a>
    <nav className={open?"mobile-open":""}>
      {links.map(([href,label])=><a href={href} key={href} onClick={()=>setOpen(false)}>{label}</a>)}
    </nav>
    <div className="nav-actions">
      <a className="nav-cta" href="/contact">Contact <Icon name="arrow"/></a>
      <button className="menu-button" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}><Icon name={open?"close":"menu"}/></button>
    </div>
  </header>;
}
