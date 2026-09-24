import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About",
  description: "About Zion Opaaje — biography, background, education, faith, interests and work."
};

const interests = [
  "Artificial Intelligence",
  "Software Development",
  "AI Assistants",
  "AI Agents",
  "Voice AI",
  "Web Development",
  "Backend Development",
  "Digital Products",
  "Technology",
  "Entrepreneurship",
  "Gaming"
];

export default function About() {
  return (
    <>
      <SiteNav />
      <main className="page about-page">
        <section className="page-hero about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">ABOUT</p>
            <h1>Who I am.</h1>
            <p className="lead">
              Zion OPAAJE, also known as MegaTron and MEGATRON300924, is a Nigerian
              technology builder, founder and student interested in artificial
              intelligence, software, digital products and the future of technology.
            </p>
          </div>

          <div className="gaming-wall" aria-hidden="true">
            <div className="wall-grid" />
            <img className="minecraft-art" src="/minecraft-svgrepo-com.svg" alt="" aria-hidden="true" />
            <div className="wall-label">MEGATRON300924</div>
            <div className="wall-subtitle">BUILD • PLAY • CREATE</div>
            <div className="scan-line" />
          </div>
        </section>

        <section className="section split about-light-section">
          <div>
            <p className="eyebrow">BIOGRAPHY</p>
            <h2>Building while learning.</h2>
            <div className="about-photo">
              <img src="https://www.max-ai.name.ng/zionopaaje.png" alt="Zion Opaaje" />
              <span>MEGATRON · ZION OPAJE</span>
            </div>
          </div>
          <div className="about-copy">
            <p>
              I am a Nigerian technology builder who started exploring entrepreneurship
              and digital technology at a young age. I enjoy learning how software,
              online platforms and digital systems work, then turning ideas into
              projects that people can actually use.
            </p>
            <p>
              My work combines technology, creativity and entrepreneurship. I build
              software, experiment with artificial intelligence, work on online
              products and continue developing my technical skills through practical
              projects.
            </p>
            <p>
              I am also interested in gaming and digital communities. Technology is
              not just something I study; it is a space where I like to experiment,
              create and learn by doing.
            </p>
          </div>
        </section>

        <section className="section about-light-section">
          <div className="section-heading">
            <p className="eyebrow">CURRENTLY BUILDING</p>
            <h2>What I’m focused on now.</h2>
          </div>

          <div className="building-grid">
            <article className="building-card">
              <div className="building-image">
                <img src="https://max-ai.name.ng/favicon.png" alt="The MAX AI Ecosystem logo" />
              </div>
              <div>
                <strong>The MAX AI Ecosystem</strong>
                <span>AI platform and connected digital services</span>
                <p>Continuing to develop MAX AI and its wider ecosystem of products, experiences and infrastructure.</p>
              </div>
            </article>

            <article className="building-card">
              <div className="building-image">
                <img src="/ttfl-store.png" alt="TTFL Store logo" />
              </div>
              <div>
                <strong>TTFL Store</strong>
                <span>Marketplace platform</span>
                <p>Building the web, mobile and backend systems that power the marketplace.</p>
              </div>
            </article>

            <article className="building-card">
              <div className="building-image">
                <img src="https://max-ai.name.ng/ttfl.png" alt="The Tron Forge Limited logo" />
              </div>
              <div>
                <strong>The Tron Forge Limited</strong>
                <span>Technology company</span>
                <p>Growing the company around practical software, AI and digital products.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section dark roles-section">
          <div className="section-heading">
            <p className="eyebrow">MY ROLES</p>
            <h2>Different roles. One direction.</h2>
          </div>
          <div className="roles-grid">
            <article className="role-card">
              <div className="role-top"><span className="role-index">01</span><div className="role-logo"><img src="https://max-ai.name.ng/ttfl.png" alt="The Tron Forge Limited logo" /></div></div>
              <div className="role-content"><span className="role-label">FOUNDER</span><h3>Founder</h3><p>The Tron Forge Limited — building a technology company around digital products and software.</p></div>
            </article>
            <article className="role-card">
              <div className="role-top"><span className="role-index">02</span><div className="role-logo"><img src="https://max-ai.name.ng/favicon.png" alt="The MAX AI Ecosystem logo" /></div></div>
              <div className="role-content"><span className="role-label">CREATOR</span><h3>Creator</h3><p>The MAX AI Ecosystem — creating an AI platform and connected ecosystem of services.</p></div>
            </article>
            <article className="role-card">
              <div className="role-top"><span className="role-index">03</span><div className="role-logo"><img src="/ttfl-store.png" alt="TTFL Store logo" /></div></div>
              <div className="role-content"><span className="role-label">BUILDER</span><h3>Builder</h3><p>TTFL Store — developing a marketplace across web, mobile and backend systems.</p></div>
            </article>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">TECHNICAL KNOWLEDGE</p>
            <h2>The tools I work with.</h2>
          </div>
          <div className="tags light-tags">
            {["JavaScript","TypeScript","Python","React","Next.js","HTML","CSS","Node.js","Express","PostgreSQL","Prisma","GitHub","Vercel","Render","AI Applications","AI Agents","Voice AI","LLM Applications"].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="section dark split">
          <div>
            <p className="eyebrow">JOURNEY</p>
            <h2>A timeline of building.</h2>
          </div>
          <div className="timeline-list">
            <div><strong>2024</strong><span>Founded The Tron Forge Limited</span><p>Started the company as a foundation for building digital technologies and future-facing products.</p></div>
            <div><strong>2025</strong><span>Built TTFL Store</span><p>Expanded into e-commerce with a marketplace supported by web, mobile and backend systems.</p></div>
            <div><strong>2026</strong><span>Expanded The MAX AI Ecosystem</span><p>Continued developing MAX AI and planning a broader family of connected digital services.</p></div>
            <div><strong>Now</strong><span>Learning, building and iterating</span><p>Continuing to study Computer Science while turning ideas into practical technology projects.</p></div>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">IDENTITY</p>
            <h2>The details behind the name.</h2>
          </div>
          <div className="info-block">
            <strong>Zion Opaaje</strong><span>Public name</span>
            <strong>MegaTron</strong><span>Known online as</span>
            <strong>MEGATRON300924</strong><span>Online identity / handle</span>
            <strong>Nigeria</strong><span>Country</span>
          </div>
        </section>

        <section className="section gaming-section">
          <div className="gaming-section-head">
            <div><p className="eyebrow">THE OTHER SIDE</p><h2>Part builder. Part gamer.</h2></div>
            <p>Gaming has been part of how I explore creativity, competition and online communities. My gaming identity is closely connected to MegaTron300924, especially through Minecraft and the communities I have built around it.</p>
          </div>
          <div className="gaming-stage">
            <div className="minecraft-sky" />
            <img className="minecraft-art-stage" src="/minecraft-svgrepo-com.svg" alt="" aria-hidden="true" />
            <div className="pixel-sun" />
            <div className="mountain mountain-one" />
            <div className="mountain mountain-two" />
            <div className="ground-layer" />
            <div className="gaming-sign"><span>MEGATRON</span><b>300924</b><a href="https://youtube.com/@opaajezion" target="_blank" rel="noreferrer">WATCH MY GAMING CHANNEL <span>↗</span></a></div>
          </div>
        </section>

        <section className="section dark split">
          <div><p className="eyebrow">MY WORK</p><h2>From ideas to products.</h2></div>
          <div><p>I am the founder of The Tron Forge Limited, a technology company focused on building digital technologies, software and future-facing products. The company is the broader organization behind several projects I have developed.</p><p>One of my main projects is The MAX AI Ecosystem, an ongoing AI platform centered on a personal digital assistant and a wider connected ecosystem of services. I am also the founder and builder of TTFL Store, an e-commerce marketplace with web, mobile and backend components.</p><p>These projects represent different parts of the same goal: learning how to build useful technology and gradually turning ambitious ideas into real products.</p></div>
        </section>

        <section className="section">
          <div className="section-heading"><p className="eyebrow">WHAT I BUILD</p><h2>Technology is my workshop.</h2></div>
          <div className="cards three">
            <article className="card"><span className="card-index">01</span><h3>AI & Voice</h3><p>AI assistants, AI agents, voice interaction and software experiences built around intelligent systems.</p></article>
            <article className="card"><span className="card-index">02</span><h3>Web & Software</h3><p>Websites, web applications, backend services, APIs and digital products that connect ideas with real users.</p></article>
            <article className="card"><span className="card-index">03</span><h3>Digital Products</h3><p>Platforms and products that combine technology, design and entrepreneurship into something people can use.</p></article>
          </div>
        </section>

        <section className="section forge-wall-section">
          <div className="forge-wall"><div className="forge-wall-pattern" /><img className="ttfl-image" src="/ttfl.jpg" alt="The Tron Forge Limited" /><div className="forge-wall-content"><p className="eyebrow">THE TRON FORGE LIMITED</p><h2>...We Forge The Future...</h2><p>The company behind the technology I am building — from AI systems to digital products and online platforms.</p></div><div className="forge-spark spark-one" /><div className="forge-spark spark-two" /><div className="forge-spark spark-three" /></div>
        </section>

        <section className="section split">
          <div><p className="eyebrow">PERSONAL</p><h2>Faith is part of who I am.</h2></div>
          <div className="info-block"><strong>Jehovah’s Witness</strong><span>Zion OPAAJE is also a baptized Jehovah’s Witness.</span><p>My faith is an important part of my identity and personal life.</p></div>
        </section>

        <section className="section dark split">
          <div><p className="eyebrow">EDUCATION</p><h2>Learning computer science.</h2></div>
          <div className="info-block"><div className="education-school"><img src="/mivalogo.png" alt="Miva Open University logo" /><div><strong>Miva Open University</strong><span>Computer Science</span></div></div><p>I study Computer Science while building software and developing technology projects outside the classroom.</p><strong>Overcomers International School</strong><span>Earlier education</span><p>My earlier education includes Overcomers International School, before continuing my studies at Miva Open University.</p></div>
        </section>

        <section className="section split">
          <div><p className="eyebrow">INTERESTS</p><h2>What I care about.</h2></div>
          <div className="tags light-tags">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
        </section>

        <section className="section dark split">
          <div><p className="eyebrow">VISION</p><h2>...We Forge The Future...</h2></div>
          <div><p>My long-term vision is to build technology that is useful, accessible and capable of shaping the future. I want to keep learning, keep building and grow The Tron Forge from individual projects into a technology company with products that can make a meaningful difference.</p><p>For me, the process matters as much as the destination: learn the technology, build the idea, test it in the real world, learn from what happens and keep moving forward.</p></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
