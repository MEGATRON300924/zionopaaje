"use client";

import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const photos = [
  { src: "/Zionopaaje_graduation_Highschool.png", alt: "Zion Opaaje at his Overcomes International School graduation in 2025", title: "A milestone worth remembering", category: "Milestone", description: "In 2025, Zion Opaaje graduated from Overcomes International School at the age of 15. It was an important milestone in his educational journey and a moment that marks one chapter completed before moving on to new goals and opportunities.", featured: true },
  { src: "/Causal_pic_of_Zion_Opaaje.jpg", alt: "Casual photograph of Zion Opaaje", title: "A casual moment", category: "Personal", description: "A relaxed personal photograph of Zion Opaaje, capturing a moment away from his work and projects." },
  { src: "/zionopaaje.png", alt: "Portrait photograph of Zion Opaaje", title: "A personal portrait", category: "Portrait", description: "A portrait of Zion Opaaje, part of his personal photo collection." },
  { src: "/zionopaaje_2.png", alt: "Another personal photograph of Zion Opaaje", title: "Another moment", category: "Personal", description: "Another photograph of Zion Opaaje, adding a different frame to this collection of personal memories." },
  { src: "/zionopaaje_3.png", alt: "Portrait of Zion Opaaje", title: "Portrait", category: "Personal", description: "A personal portrait of Zion Opaaje." },
  { src: "/zionopaaje_4.png", alt: "Photograph of Zion Opaaje", title: "Another side", category: "Personal", description: "A further photograph of Zion Opaaje from his personal collection." }
];

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <SiteNav />
      <main className="page gallery-page">
        <section className="page-hero gallery-hero">
          <p className="eyebrow">PERSONAL ARCHIVE · PHOTOGRAPHS</p>
          <h1>Moments,<br /><em>in frames.</em></h1>
          <p className="lead">A collection of photographs and moments from my journey so far.</p>
          <span className="gallery-count">06 PHOTOGRAPHS <i /> UPDATED COLLECTION</span>
        </section>

        <section className="section gallery-section">
          <div className="gallery-section-heading">
            <div><p className="eyebrow">THE COLLECTION</p><h2>Selected moments.</h2></div>
            <p>Portraits, personal photographs and milestones from different parts of my journey.</p>
          </div>

          <button className="gallery-feature" onClick={() => setActive(0)} aria-label="View graduation photograph">
            <div className="gallery-feature-image"><img src={photos[0].src} alt={photos[0].alt} /></div>
            <div className="gallery-feature-copy">
              <span className="gallery-kicker">2025 · EDUCATION</span>
              <h3>A milestone worth remembering.</h3>
              <p>In 2025, I graduated from Overcomes International School at the age of 15. It was an important milestone in my educational journey and a moment that marks one chapter completed before moving on to new goals and opportunities.</p>
              <span className="gallery-view">VIEW PHOTOGRAPH <b>↗</b></span>
            </div>
          </button>

          <div className="gallery-grid">
            {photos.slice(1).map((photo, index) => (
              <button className={`gallery-tile gallery-tile-${index + 1}`} key={photo.src} onClick={() => setActive(index + 1)} aria-label={`View ${photo.title}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span className="gallery-tile-caption"><small>{photo.category}</small><strong>{photo.title}</strong><span className="gallery-tile-description">{photo.description}</span><i>↗</i></span>
              </button>
            ))}
          </div>
          <p className="gallery-footnote">A personal collection. More moments will be added over time.</p>
        </section>
      </main>
      <SiteFooter />
      {active !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" onClick={() => setActive(null)}>
          <button className="gallery-close" onClick={() => setActive(null)} aria-label="Close photograph">×</button>
          <button className="gallery-prev" onClick={(event) => { event.stopPropagation(); setActive((active + photos.length - 1) % photos.length); }} aria-label="Previous photograph">‹</button>
          <img src={photos[active].src} alt={photos[active].alt} onClick={(event) => event.stopPropagation()} />
          <button className="gallery-next" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % photos.length); }} aria-label="Next photograph">›</button>
          <span className="gallery-lightbox-count">{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
        </div>
      )}
    </>
  );
}
