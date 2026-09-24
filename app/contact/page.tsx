import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Contact",
  description: "Contact Zion Opaaje for collaborations, technology, products and business enquiries."
};

export default function Contact() {
  return (
    <>
      <SiteNav />
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">CONTACT</p>
          <h1>Let’s build what comes next.</h1>
          <p className="lead">For collaborations, technology, products and business enquiries.</p>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">BUSINESS</p>
            <h2>Get in touch.</h2>
          </div>

          <div className="contact-card">
            <p>For general enquiries, contact The Tron Forge Limited.</p>

            <div className="contact-actions">
              <a className="primary" href="mailto:info@thetronforge.name.ng">
                Email info@thetronforge.name.ng →
              </a>

              <a
                className="whatsapp-button"
                href="https://wa.link/hfv0mc"
                target="_blank"
                rel="noreferrer"
              >
                <span className="whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.59 5.93L.17 24l6.4-1.68a11.8 11.8 0 0 0 5.51 1.36h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.41-8.36ZM12.09 21.66h-.01a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.81 9.81 0 1 1 8.39 4.65Zm5.39-7.35c-.29-.15-1.71-.84-1.98-.93-.27-.1-.46-.15-.66.15-.19.29-.75.93-.92 1.12-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.21 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.34Z"/>
                  </svg>
                </span>
                <span>WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="small-note">
              You can also explore the public profiles and projects from the menu above.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
