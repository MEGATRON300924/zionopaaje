"use client";

import { useState } from "react";

function Icon({name}:{name:"menu"|"close"|"arrow"}) {
  const common={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,ariaHidden:true};
  if(name==="menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
  if(name==="close") return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>;
  return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
}

const links=[
  ["/about","About"],
  ["/projects","Projects"],
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
