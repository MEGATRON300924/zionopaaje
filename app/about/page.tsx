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
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">ABOUT</p>
          <h1>Who I am.</h1>
          <p className="lead">
            Zion Opaaje, also known as MegaTron and MEGATRON300924, is a Nigerian
            technology builder, founder and student interested in artificial
            intelligence, software, digital products and the future of technology.
          </p>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">BIOGRAPHY</p>
            <h2>Building while learning.</h2>
          </div>
          <div>
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

        <section className="section dark split">
          <div>
            <p className="eyebrow">MY WORK</p>
            <h2>From ideas to products.</h2>
          </div>
          <div>
            <p>
              I am the founder of The Tron Forge Limited, a technology company focused
              on building digital technologies, software and future-facing products.
              The company is the broader organization behind several projects I have
              developed.
            </p>
            <p>
              One of my main projects is The MAX AI Ecosystem, an ongoing AI platform
              centered on a personal digital assistant and a wider connected ecosystem
              of services. I am also the founder and builder of TTFL Store, an
              e-commerce marketplace with web, mobile and backend components.
            </p>
            <p>
              These projects represent different parts of the same goal: learning how
              to build useful technology and gradually turning ambitious ideas into
              real products.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">WHAT I BUILD</p>
            <h2>Technology is my workshop.</h2>
          </div>
          <div className="cards three">
            <article className="card">
              <span className="card-index">01</span>
              <h3>AI & Voice</h3>
              <p>
                AI assistants, AI agents, voice interaction and software experiences
                built around intelligent systems.
              </p>
            </article>
            <article className="card">
              <span className="card-index">02</span>
              <h3>Web & Software</h3>
              <p>
                Websites, web applications, backend services, APIs and digital
                products that connect ideas with real users.
              </p>
            </article>
            <article className="card">
              <span className="card-index">03</span>
              <h3>Digital Products</h3>
              <p>
                Platforms and products that combine technology, design and
                entrepreneurship into something people can use.
              </p>
            </article>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">PERSONAL</p>
            <h2>Faith is part of who I am.</h2>
          </div>
          <div className="info-block">
            <strong>Jehovah’s Witness</strong>
            <span>Zion Opaaje is also a baptized Jehovah’s Witness.</span>
            <p>
              My faith is an important part of my identity and personal life.
            </p>
          </div>
        </section>

        <section className="section dark split">
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h2>Learning computer science.</h2>
          </div>
          <div className="info-block">
            <strong>Miva Open University</strong>
            <span>Computer Science</span>
            <p>
              I study Computer Science while building software and developing
              technology projects outside the classroom.
            </p>
            <strong>Overcomers International School</strong>
            <span>Earlier education</span>
            <p>
              My earlier education includes Overcomers International School, before
              continuing my studies at Miva Open University.
            </p>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">INTERESTS</p>
            <h2>What I care about.</h2>
          </div>
          <div className="tags light-tags">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </section>

        <section className="section dark split">
          <div>
            <p className="eyebrow">VISION</p>
            <h2>...We Forge The Future...</h2>
          </div>
          <div>
            <p>
              My long-term vision is to build technology that is useful, accessible
              and capable of shaping the future. I want to keep learning, keep
              building and grow The Tron Forge from individual projects into a
              technology company with products that can make a meaningful difference.
            </p>
            <p>
              For me, the process matters as much as the destination: learn the
              technology, build the idea, test it in the real world, learn from what
              happens and keep moving forward.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}